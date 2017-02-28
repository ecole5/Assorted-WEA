define('students-records/components/student-data-entry', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    store: _ember['default'].inject.service(),
    showAllStudents: false,
    showFindStudent: false,
    residencyModel: null,
    genderModel: null,
    selectedResidency: null,
    selectedGender: null,
    randomVariableForController: null,
    selectedDate: null,
    studentsRecords: null,
    currentStudent: null,
    currentIndex: null,
    firstIndex: 0,
    lastIndex: 0,
    studentPhoto: null,
    limit: null,
    offset: null,
    pageSize: null,
    movingBackword: false,
    scholarshipRecords: null,
    registrationComments: null,
    basisOfAdmission: null,
    admissionAverage: 0,
    admissionComments: null,
    editingScholarship: null,
    RExist: true,
    advanceStandingRecords: null,

    studentModel: _ember['default'].observer('offset', function () {
      var self = this;
      this.get('store').query('student', {
        limit: self.get('limit'),
        offset: self.get('offset')
      }).then(function (records) {
        self.set('studentsRecords', records);
        self.set('firstIndex', records.indexOf(records.get("firstObject")));
        self.set('lastIndex', records.indexOf(records.get("lastObject")));
        if (self.get('movingBackword')) {
          self.set('currentIndex', records.indexOf(records.get("lastObject")));
        } else {
          self.set('currentIndex', records.indexOf(records.get("firstObject")));
        }
      });
    }),

    fetchStudent: _ember['default'].observer('currentIndex', function () {
      this.showStudentData(this.get('currentIndex'));
    }),

    init: function init() {
      this._super.apply(this, arguments);
      // load Residency data model
      this.get('store').findAll('residency').then(function (records) {
        self.set('residencyModel', records);
      });

      // load gender data model
      this.get('store').findAll('gender').then(function (records) {
        self.set('genderModel', records);
      });

      // load first page of the students records
      this.set('limit', 10);
      this.set('offset', 0);
      this.set('pageSize', 10);
      var self = this;
      this.get('store').query('student', {
        limit: self.get('limit'),
        offset: self.get('offset'),
        include: 'scholarship'
      }).then(function (records) {
        self.set('studentsRecords', records);
        self.set('firstIndex', records.indexOf(records.get("firstObject")));
        self.set('lastIndex', records.indexOf(records.get("lastObject")));

        // Show first student data
        self.set('currentIndex', self.get('firstIndex'));
      });
    },

    reload: function reload() {

      this._super.apply(this, arguments);

      // load Residency data model
      this.get('store').findAll('residency').then(function (records) {
        self.set('residencyModel', records);
      });

      // load first page of the students records
      this.set('limit', 10);
      this.set('offset', 0);
      this.set('pageSize', 10);
      var self = this;
      this.get('store').query('student', {
        limit: self.get('limit'),
        offset: self.get('offset')
      }).then(function (records) {
        self.set('studentsRecords', records);
        self.set('firstIndex', records.indexOf(records.get("firstObject")));
        self.set('lastIndex', records.indexOf(records.get("lastObject")));

        // Show first student data
        self.set('currentIndex', self.get('firstIndex'));

        ///////why this line still log out the stuff in the text field instead of the newly fetched data from db
        console.log(self.get('currentStudent').get('number'));
      });
    },

    showStudentData: function showStudentData(index) {
      var tempStudent = this.get('studentsRecords').objectAt(index);
      this.set('currentStudent', tempStudent);
      this.set('studentPhoto', this.get('currentStudent').get('photo'));
      var date = this.get('currentStudent').get('DOB');
      var datestring = date.toISOString().substring(0, 10);
      this.set('selectedDate', datestring);
      this.updateScholarships();
    },

    // Gets the scholarships for currentStudent and saves them to scholarshipRecords
    //fix what ever is going on with the RExist stuff. it should be in the above function
    updateScholarships: function updateScholarships() {
      var self = this;
      this.get('store').query('scholarship', {
        student: self.get('currentStudent').id
      }).then(function (records) {
        self.set('scholarshipRecords', records);
      });
      try {
        this.set('currentStudent', this.get('studentsRecords').objectAt(index));
        this.set('studentPhoto', this.get('currentStudent').get('photo'));
        var date = this.get('currentStudent').get('DOB');
        var datestring = date.toISOString().substring(0, 10);
        this.set('selectedDate', datestring);
        // this.set('RExist',true);
      } catch (e) {
        //this.set('RExist',false);
      }
    },

    didRender: function didRender() {
      _ember['default'].$('.menu .item').tab();
    },

    actions: {
      saveStudent: function saveStudent() {
        var updatedStudent = this.get('currentStudent');
        var res = this.get('store').peekRecord('residency', this.get('selectedResidency'));
        var gen = this.get('store').peekRecord('gender', this.get('selectedGender'));
        updatedStudent.set('DOB', new Date(this.get('selectedDate')));
        updatedStudent.set('resInfo', res);
        updatedStudent.set('genInfo', gen);
        //updatedStudent.save().then(() => {
        //     this.set('isStudentFormEditing', false);

        // Saves the student
        updatedStudent.save().then(function () {});
      },

      setCurrentInputScholarship: function setCurrentInputScholarship(scholarship) {
        this.set('editingScholarship', scholarship);
      },

      editScholarshipID: function editScholarshipID(newScholarshipID) {
        var updatedScholarship = this.get('editingScholarship');
        updatedScholarship.set('scholarshipID', newScholarshipID);
        // Saves the scholarship
        updatedScholarship.save().then(function () {
          //this.updateScholarships();     
        });
      },

      editScholarshipNote: function editScholarshipNote(newScholarshipNote) {
        var updatedScholarship = this.get('editingScholarship');
        updatedScholarship.set('note', newScholarshipNote);
        //alert("here");
        // Saves the scholarship
        updatedScholarship.save().then(function () {
          //this.updateScholarships();     
        });
      },

      editRegistrationComments: function editRegistrationComments(newRegistrationComments) {
        var updatedStudentComments = this.get('currentStudent');
        updatedStudentComments.set('registrationComments', newRegistrationComments);
        updatedStudentComments.save().then(function () {
          //this.updateScholarships();     
        });
      },
      ////////////////
      ////////////////
      ////////////////
      ////////////////
      ////////////////
      undoSave: function undoSave() {
        var tempIndex = this.get('currentIndex');
        this.reload();

        //this.init();
        //this.studentModel();

        ////////////////
        //manually set offset back and forthe to trigger the observer function:  studentModel
        this.set('offset', 1);
        this.set('offset', 0);

        //manually set currentIndex back and forthe to trigger the observer function:  fetchStudent
        this.set('currentIndex', 1);
        this.set('currentIndex', tempIndex);
        //debug
        console.log(this.get('currentStudent').get('number'));
      },

      ////////////////
      ////////////////
      ////////////////
      ////////////////
      ////////////////

      editBasisOfAdmission: function editBasisOfAdmission(newBasisOfAdmission) {
        var updatedStudentComments = this.get('currentStudent');
        updatedStudentComments.set('basisOfAdmission', newBasisOfAdmission);
        updatedStudentComments.save().then(function () {
          //this.updateScholarships();     
        });
      },

      editAdmissionAverage: function editAdmissionAverage(newAdmissionAverage) {
        var updatedStudentComments = this.get('currentStudent');
        if (newAdmissionAverage > 100) {
          newAdmissionAverage = 100;
        } else if (newAdmissionAverage < 0) {
          newAdmissionAverage = 0;
        }

        updatedStudentComments.set('admissionAverage', newAdmissionAverage);
        updatedStudentComments.save().then(function () {
          //this.updateScholarships();     
        });
      },

      editAdmissionComments: function editAdmissionComments(newAdmissionComments) {
        var updatedStudentComments = this.get('currentStudent');
        updatedStudentComments.set('admissionComments', newAdmissionComments);

        updatedStudentComments.save().then(function () {
          //this.updateScholarships();     
        });
      },

      createNewScholarship: function createNewScholarship() {
        var _this = this;

        // We only save one way because the default serializer/adapter that we use wont give us a one-to-many JSON
        var scholarship = this.get('store').createRecord('scholarship', {
          scholarshipID: "Mock name for the scholarship",
          note: "Mock note for a scholarship",
          student: this.get('currentStudent')
        });

        // Saves the scholarship
        scholarship.save().then(function () {
          _this.updateScholarships();
        });
      },

      deleteScholarship: function deleteScholarship(scholarship) {
        var self = this;
        // Delete from store, and will automatically do everything else like sending delete request
        scholarship.destroyRecord();
      },

      firstStudent: function firstStudent() {
        this.set('currentIndex', this.get('firstIndex'));
      },

      nextStudent: function nextStudent() {
        if (this.get('RExist') === true) {
          this.set('movingBackword', false);
          if (this.get('currentIndex') < this.get('lastIndex')) {
            this.set('currentIndex', this.get('currentIndex') + 1);
            //     console.log(JSON.stringify(this.get('currentStudent')));
          } else {
              this.set('offset', this.get('offset') + this.get('pageSize'));
            }
        }
      },

      previousStudent: function previousStudent() {

        this.set('movingBackword', true);
        if (this.get('currentIndex') > 0) {
          this.set('currentIndex', this.get('currentIndex') - 1);
        } else if (this.get('offset') > 0) {
          this.set('offset', this.get('offset') - this.get('pageSize'));
        }
      },

      lastStudent: function lastStudent() {

        this.set('currentIndex', this.get('lastIndex'));
      },

      allStudents: function allStudents() {
        this.set('showAllStudents', true);
      },

      selectGender: function selectGender(gender) {
        this.set('selectedGender', gender);
      },

      selectResidency: function selectResidency(residency) {
        this.set('selectedResidency', residency);
      },

      assignDate: function assignDate(date) {
        this.set('selectedDate', date);
      },

      findStudent: function findStudent() {
        //disabled until fixed
        // this.set('showFindStudent', true);
      }
    }
  });
});