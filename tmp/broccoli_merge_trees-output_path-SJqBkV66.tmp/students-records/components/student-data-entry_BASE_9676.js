define('students-records/components/student-data-entry_BASE_9676', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    store: _ember['default'].inject.service(),
    showAllStudents: false,
    residencyModel: null,
    selectedResidency: null,
    selectedGender: null,
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
      });
    },

    showStudentData: function showStudentData(index) {
      this.set('currentStudent', this.get('studentsRecords').objectAt(index));
      this.set('studentPhoto', this.get('currentStudent').get('photo'));
      var date = this.get('currentStudent').get('DOB');
      var datestring = date.toISOString().substring(0, 10);
      this.set('selectedDate', datestring);
    },

    didRender: function didRender() {
      _ember['default'].$('.menu .item').tab();
    },

    actions: {
      saveStudent: function saveStudent() {
        var updatedStudent = this.get('currentStudent');
        var res = this.get('store').peekRecord('residency', this.get('selectedResidency'));
        updatedStudent.set('gender', this.get('selectedGender'));
        updatedStudent.set('DOB', new Date(this.get('selectedDate')));
        updatedStudent.set('resInfo', res);
        updatedStudent.save().then(function () {
          //     this.set('isStudentFormEditing', false);
        });
      },

      firstStudent: function firstStudent() {
        this.set('currentIndex', this.get('firstIndex'));
      },

      nextStudent: function nextStudent() {
        this.set('movingBackword', false);
        if (this.get('currentIndex') < this.get('lastIndex')) {
          this.set('currentIndex', this.get('currentIndex') + 1);
          //     console.log(JSON.stringify(this.get('currentStudent')));
        } else {
            this.set('offset', this.get('offset') + this.get('pageSize'));
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
      }
    }
  });
});