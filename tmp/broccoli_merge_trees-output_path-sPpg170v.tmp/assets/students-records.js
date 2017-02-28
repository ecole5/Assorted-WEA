"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('students-records/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].RESTAdapter.extend({
    host: 'http://localhost:3700'

  });
});
define('students-records/app', ['exports', 'ember', 'students-records/resolver', 'ember-load-initializers', 'students-records/config/environment'], function (exports, _ember, _studentsRecordsResolver, _emberLoadInitializers, _studentsRecordsConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({

    modulePrefix: _studentsRecordsConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _studentsRecordsConfigEnvironment['default'].podModulePrefix,
    Resolver: _studentsRecordsResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _studentsRecordsConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('students-records/components/about-us', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('students-records/components/all-students', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    store: _ember['default'].inject.service(),
    limit: 10,
    offset: 0,
    pageSize: 10,

    studentsModel: null,
    INDEX: null,
    notDONE: null,

    actions: {
      loadNext: function loadNext() {
        //console.log(this.get("studentsModel"));
        _ember['default'].$('.ui.modal').modal('hide');
        this.set('offset', this.get('offset') + this.get('pageSize'));
        _ember['default'].$('.ui.modal').modal('show');
      },

      loadPrevious: function loadPrevious() {
        if (this.get('offset') >= this.get('pageSize')) {
          _ember['default'].$('.ui.modal').modal('hide');
          this.set('offset', this.get('offset') - this.get('pageSize'));
          _ember['default'].$('.ui.modal').modal('show');
        }
      },

      getStudent: function getStudent(student) {
        var index = this.get('studentsModel').indexOf(student);
        this.set('INDEX', index);
      },

      exit: function exit() {
        this.set('notDONE', false);
        _ember['default'].$('.ui.modal').modal('hide');
      }
    },

    didRender: function didRender() {
      _ember['default'].$('.ui.modal').modal({
        closable: false
      }).modal('show');
    }
  });
});
define('students-records/components/find-student', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Component.extend({

        store: _ember['default'].inject.service(),
        notDONE: null,

        actions: {
            exit: function exit() {
                //this.set('notDONE', false);
                // Ember.$('.ui.modal').modal('hide');
            },
            search: function search(student) {}
        },

        didRender: function didRender() {
            _ember['default'].$('.ui.modal').modal('show');
        }
    });
});
define('students-records/components/help-info', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('students-records/components/home-page', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    didInsertElement: function didInsertElement() {
      //    Ember.$('.tabular.menu .item').tab();
      _ember['default'].$(document).ready(function () {
        _ember['default'].$('.ui .item').on('click', function () {
          _ember['default'].$('.ui .item').removeClass('active');
          _ember['default'].$(this).addClass('active');
        });
      });
    },

    isHomeShowing: true,
    isStudentsRecordsDataEntry: false,
    isAboutShowing: false,

    //for help
    isHelpShowing: false,

    actions: {
      home: function home() {
        this.set('isHomeShowing', true);
        this.set('isStudentsRecordsDataEntry', false);
        this.set('isAboutShowing', false);
        this.set('isHelpShowing', false);
      },

      studentsDataEntry: function studentsDataEntry() {
        this.set('isHomeShowing', false);
        this.set('isStudentsRecordsDataEntry', true);
        this.set('isAboutShowing', false);
        this.set('isHelpShowing', false);
      },

      about: function about() {
        this.set('isHomeShowing', false);
        this.set('isStudentsRecordsDataEntry', false);
        this.set('isAboutShowing', true);
        this.set('isHelpShowing', false);
      },

      help: function help() {
        this.set('isHomeShowing', false);
        this.set('isStudentsRecordsDataEntry', false);
        this.set('isAboutShowing', false);
        this.set('isHelpShowing', true);
      }
    }
  });
});
define('students-records/components/manage-system-code', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Component.extend({

        isAddingResidency: false,
        isAddingGender: false,
        ResidencyModel: null, //feed in through outlet in student data entry
        GenderModel: null, //feed in through outlet in student data entry
        currentModel: null,
        store: _ember['default'].inject.service(),

        actions: {
            removeItem: function removeItem(item) {
                item.destroyRecord();
            },

            editItem: function editItem(value) {
                var updatedItem = this.get('currentModel');
                updatedItem.set('name', value);
                updatedItem.save();
            },

            setCurrentModel: function setCurrentModel(model) {
                //this deals with the problem
                this.set('currentModel', model);
            },

            addNewResidency: function addNewResidency() {
                this.set('rName', null);
                this.set('isAddingResidency', true);
            },

            addNewGender: function addNewGender() {
                this.set('gName', null);
                this.set('isAddingGender', true);
            },

            saveResidency: function saveResidency() {
                var myStore = this.get('store');
                var newThing = myStore.createRecord('residency', {
                    name: this.get('rName')
                });
                newThing.save();
                this.set('isAddingResidency', false);
            },

            saveGender: function saveGender() {
                var myStore = this.get('store');
                var newThing = myStore.createRecord('gender', {
                    name: this.get('gName')
                });
                newThing.save();
                this.set('isAddingGender', false);
            },

            cancelNewResidency: function cancelNewResidency() {
                this.set('isAddingResidency', false);
            },
            cancelNewGender: function cancelNewGender() {
                this.set('isAddingGender', false);
            }
        }

    });
});
define('students-records/components/show-logo', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    logoIsShowing: false,
    actions: {
      showLogo: function showLogo() {
        this.set('logoIsShowing', true);
      },
      hideLogo: function hideLogo() {
        this.set('logoIsShowing', false);
      }
    }

  });
});
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
define('students-records/components/student-data-entry_BACKUP_9676', ['exports', 'ember'], function (exports, _ember) {
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
    RExist: true,

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
      try {
        this.set('currentStudent', this.get('studentsRecords').objectAt(index));
        this.set('studentPhoto', this.get('currentStudent').get('photo'));
        var date = this.get('currentStudent').get('DOB');
        var datestring = date.toISOString().substring(0, 10);
        this.set('selectedDate', datestring);
        this.set('RExist', true);
      } catch (e) {
        this.set('RExist', false);
      }
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
      }
    }
  });
});
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
define('students-records/components/student-data-entry_LOCAL_9676', ['exports', 'ember'], function (exports, _ember) {
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
    RExist: true,

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
      try {
        this.set('currentStudent', this.get('studentsRecords').objectAt(index));
        this.set('studentPhoto', this.get('currentStudent').get('photo'));
        var date = this.get('currentStudent').get('DOB');
        var datestring = date.toISOString().substring(0, 10);
        this.set('selectedDate', datestring);
        this.set('RExist', true);
      } catch (e) {
        this.set('RExist', false);
      }
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
      }
    }
  });
});
define('students-records/components/student-data-entry_REMOTE_9676', ['exports', 'ember'], function (exports, _ember) {
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
define('students-records/components/ui-accordion', ['exports', 'semantic-ui-ember/components/ui-accordion'], function (exports, _semanticUiEmberComponentsUiAccordion) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberComponentsUiAccordion['default'];
    }
  });
});
define('students-records/components/ui-checkbox', ['exports', 'semantic-ui-ember/components/ui-checkbox'], function (exports, _semanticUiEmberComponentsUiCheckbox) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberComponentsUiCheckbox['default'];
    }
  });
});
define('students-records/components/ui-dimmer', ['exports', 'semantic-ui-ember/components/ui-dimmer'], function (exports, _semanticUiEmberComponentsUiDimmer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberComponentsUiDimmer['default'];
    }
  });
});
define('students-records/components/ui-dropdown', ['exports', 'semantic-ui-ember/components/ui-dropdown'], function (exports, _semanticUiEmberComponentsUiDropdown) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberComponentsUiDropdown['default'];
    }
  });
});
define('students-records/components/ui-embed', ['exports', 'semantic-ui-ember/components/ui-embed'], function (exports, _semanticUiEmberComponentsUiEmbed) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberComponentsUiEmbed['default'];
    }
  });
});
define('students-records/components/ui-modal', ['exports', 'semantic-ui-ember/components/ui-modal'], function (exports, _semanticUiEmberComponentsUiModal) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberComponentsUiModal['default'];
    }
  });
});
define('students-records/components/ui-nag', ['exports', 'semantic-ui-ember/components/ui-nag'], function (exports, _semanticUiEmberComponentsUiNag) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberComponentsUiNag['default'];
    }
  });
});
define('students-records/components/ui-popup', ['exports', 'semantic-ui-ember/components/ui-popup'], function (exports, _semanticUiEmberComponentsUiPopup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberComponentsUiPopup['default'];
    }
  });
});
define('students-records/components/ui-progress', ['exports', 'semantic-ui-ember/components/ui-progress'], function (exports, _semanticUiEmberComponentsUiProgress) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberComponentsUiProgress['default'];
    }
  });
});
define('students-records/components/ui-radio', ['exports', 'semantic-ui-ember/components/ui-radio'], function (exports, _semanticUiEmberComponentsUiRadio) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberComponentsUiRadio['default'];
    }
  });
});
define('students-records/components/ui-rating', ['exports', 'semantic-ui-ember/components/ui-rating'], function (exports, _semanticUiEmberComponentsUiRating) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberComponentsUiRating['default'];
    }
  });
});
define('students-records/components/ui-search', ['exports', 'semantic-ui-ember/components/ui-search'], function (exports, _semanticUiEmberComponentsUiSearch) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberComponentsUiSearch['default'];
    }
  });
});
define('students-records/components/ui-shape', ['exports', 'semantic-ui-ember/components/ui-shape'], function (exports, _semanticUiEmberComponentsUiShape) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberComponentsUiShape['default'];
    }
  });
});
define('students-records/components/ui-sidebar', ['exports', 'semantic-ui-ember/components/ui-sidebar'], function (exports, _semanticUiEmberComponentsUiSidebar) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberComponentsUiSidebar['default'];
    }
  });
});
define('students-records/components/ui-sticky', ['exports', 'semantic-ui-ember/components/ui-sticky'], function (exports, _semanticUiEmberComponentsUiSticky) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberComponentsUiSticky['default'];
    }
  });
});
define('students-records/components/welcome-page', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('students-records/helpers/and', ['exports', 'ember', 'ember-truth-helpers/helpers/and'], function (exports, _ember, _emberTruthHelpersHelpersAnd) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersAnd.andHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersAnd.andHelper);
  }

  exports['default'] = forExport;
});
define('students-records/helpers/app-version', ['exports', 'ember', 'students-records/config/environment'], function (exports, _ember, _studentsRecordsConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _studentsRecordsConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('students-records/helpers/eq', ['exports', 'ember', 'ember-truth-helpers/helpers/equal'], function (exports, _ember, _emberTruthHelpersHelpersEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersEqual.equalHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersEqual.equalHelper);
  }

  exports['default'] = forExport;
});
define('students-records/helpers/gt', ['exports', 'ember', 'ember-truth-helpers/helpers/gt'], function (exports, _ember, _emberTruthHelpersHelpersGt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGt.gtHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGt.gtHelper);
  }

  exports['default'] = forExport;
});
define('students-records/helpers/gte', ['exports', 'ember', 'ember-truth-helpers/helpers/gte'], function (exports, _ember, _emberTruthHelpersHelpersGte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGte.gteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGte.gteHelper);
  }

  exports['default'] = forExport;
});
define('students-records/helpers/is-array', ['exports', 'ember', 'ember-truth-helpers/helpers/is-array'], function (exports, _ember, _emberTruthHelpersHelpersIsArray) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  }

  exports['default'] = forExport;
});
define('students-records/helpers/lt', ['exports', 'ember', 'ember-truth-helpers/helpers/lt'], function (exports, _ember, _emberTruthHelpersHelpersLt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLt.ltHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLt.ltHelper);
  }

  exports['default'] = forExport;
});
define('students-records/helpers/lte', ['exports', 'ember', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersHelpersLte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLte.lteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = forExport;
});
define('students-records/helpers/map-value', ['exports', 'semantic-ui-ember/helpers/map-value'], function (exports, _semanticUiEmberHelpersMapValue) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberHelpersMapValue['default'];
    }
  });
  Object.defineProperty(exports, 'mapValue', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberHelpersMapValue.mapValue;
    }
  });
});
define('students-records/helpers/not-eq', ['exports', 'ember', 'ember-truth-helpers/helpers/not-equal'], function (exports, _ember, _emberTruthHelpersHelpersNotEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  }

  exports['default'] = forExport;
});
define('students-records/helpers/not', ['exports', 'ember', 'ember-truth-helpers/helpers/not'], function (exports, _ember, _emberTruthHelpersHelpersNot) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNot.notHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNot.notHelper);
  }

  exports['default'] = forExport;
});
define('students-records/helpers/or', ['exports', 'ember', 'ember-truth-helpers/helpers/or'], function (exports, _ember, _emberTruthHelpersHelpersOr) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersOr.orHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersOr.orHelper);
  }

  exports['default'] = forExport;
});
define('students-records/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('students-records/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('students-records/helpers/xor', ['exports', 'ember', 'ember-truth-helpers/helpers/xor'], function (exports, _ember, _emberTruthHelpersHelpersXor) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersXor.xorHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersXor.xorHelper);
  }

  exports['default'] = forExport;
});
define('students-records/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'students-records/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _studentsRecordsConfigEnvironment) {
  var _config$APP = _studentsRecordsConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('students-records/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('students-records/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('students-records/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('students-records/initializers/export-application-global', ['exports', 'ember', 'students-records/config/environment'], function (exports, _ember, _studentsRecordsConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_studentsRecordsConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _studentsRecordsConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_studentsRecordsConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('students-records/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('students-records/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('students-records/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('students-records/initializers/truth-helpers', ['exports', 'ember', 'ember-truth-helpers/utils/register-helper', 'ember-truth-helpers/helpers/and', 'ember-truth-helpers/helpers/or', 'ember-truth-helpers/helpers/equal', 'ember-truth-helpers/helpers/not', 'ember-truth-helpers/helpers/is-array', 'ember-truth-helpers/helpers/not-equal', 'ember-truth-helpers/helpers/gt', 'ember-truth-helpers/helpers/gte', 'ember-truth-helpers/helpers/lt', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersUtilsRegisterHelper, _emberTruthHelpersHelpersAnd, _emberTruthHelpersHelpersOr, _emberTruthHelpersHelpersEqual, _emberTruthHelpersHelpersNot, _emberTruthHelpersHelpersIsArray, _emberTruthHelpersHelpersNotEqual, _emberTruthHelpersHelpersGt, _emberTruthHelpersHelpersGte, _emberTruthHelpersHelpersLt, _emberTruthHelpersHelpersLte) {
  exports.initialize = initialize;

  function initialize() /* container, application */{

    // Do not register helpers from Ember 1.13 onwards, starting from 1.13 they
    // will be auto-discovered.
    if (_ember['default'].Helper) {
      return;
    }

    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('and', _emberTruthHelpersHelpersAnd.andHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('or', _emberTruthHelpersHelpersOr.orHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('eq', _emberTruthHelpersHelpersEqual.equalHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not', _emberTruthHelpersHelpersNot.notHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('is-array', _emberTruthHelpersHelpersIsArray.isArrayHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not-eq', _emberTruthHelpersHelpersNotEqual.notEqualHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gt', _emberTruthHelpersHelpersGt.gtHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gte', _emberTruthHelpersHelpersGte.gteHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lt', _emberTruthHelpersHelpersLt.ltHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lte', _emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = {
    name: 'truth-helpers',
    initialize: initialize
  };
});
define("students-records/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('students-records/mixins/base', ['exports', 'semantic-ui-ember/mixins/base'], function (exports, _semanticUiEmberMixinsBase) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberMixinsBase['default'];
    }
  });
});
define('students-records/mixins/promise-resolver', ['exports', 'ember-promise-tools/mixins/promise-resolver'], function (exports, _emberPromiseToolsMixinsPromiseResolver) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPromiseToolsMixinsPromiseResolver['default'];
    }
  });
});
define('students-records/models/gender', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    name: _emberData['default'].attr(),
    students: _emberData['default'].hasMany('student')

  });
});
define('students-records/models/residency', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    name: _emberData['default'].attr(),
    students: _emberData['default'].hasMany('student')

  });
});
define('students-records/models/scholarship', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    note: _emberData['default'].attr('string'),
    scholarshipID: _emberData['default'].attr('string'),
    student: _emberData['default'].belongsTo('student', { async: true })
  });
});
define('students-records/models/student', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    number: _emberData['default'].attr(),
    firstName: _emberData['default'].attr(),
    lastName: _emberData['default'].attr(),
    gender: _emberData['default'].attr('number'),
    DOB: _emberData['default'].attr('date'),
    photo: _emberData['default'].attr(),
    resInfo: _emberData['default'].belongsTo('residency'),
    genInfo: _emberData['default'].belongsTo('gender'),

    registrationComments: _emberData['default'].attr(),
    basisOfAdmission: _emberData['default'].attr(),
    admissionAverage: _emberData['default'].attr('number'),
    admissionComments: _emberData['default'].attr(),
    scholarshipInfo: _emberData['default'].hasMany('scholarship', { async: true })
  });
});
define('students-records/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('students-records/router', ['exports', 'ember', 'students-records/config/environment'], function (exports, _ember, _studentsRecordsConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _studentsRecordsConfigEnvironment['default'].locationType,
    rootURL: _studentsRecordsConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('home', { path: '/' });
  });

  exports['default'] = Router;
});
define('students-records/routes/home', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('students-records/serializers/application', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].RESTSerializer.extend({
    primaryKey: '_id'
  });
});
define('students-records/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("students-records/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 27,
            "column": 6
          }
        },
        "moduleName": "students-records/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui segment container");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "ui secondary center aligned grid padded segment");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "three wide column");
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("img");
        dom.setAttribute(el4, "class", "ui right aligned container image");
        dom.setAttribute(el4, "src", "/assets/images/UWO Stacked.png");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "thirteen wide column");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("br");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h2");
        var el5 = dom.createTextNode("Welcome to Western Engineering Adjudication System");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("footer");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "ui violet inverted grid segment");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "thirteen wide column");
        var el5 = dom.createTextNode("\n        © Copyright - Assorted\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "three wide column");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5, "class", "ui right aligned container tiny image");
        dom.setAttribute(el5, "src", "/assets/images/UWO Stacked_Rev.png");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 7, 7);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [14, 2], [14, 12]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("students-records/templates/components/about-us", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 0
          }
        },
        "moduleName": "students-records/templates/components/about-us.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode("SE3352 Tutorials");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("\n  Description: Without determining of the user requirements, a software development process cannot begin – and without accurate analysis of those requirements, a project will bog down in development problems. The goal of this course is to provide students with a concepts and tools allowing them to capture correctly and completely the requirements and needs of a software system under development and the expectations of the potential user.\n  The computer labs guide students capturing and managing requirements for software projects through building and adding data to a class project within the context of a controlled requirements management process.\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        return morphs;
      },
      statements: [["content", "show-logo", ["loc", [null, [7, 0], [7, 13]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("students-records/templates/components/all-students", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 16
            },
            "end": {
              "line": 21,
              "column": 16
            }
          },
          "moduleName": "students-records/templates/components/all-students.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment(" moved the #each start and end to reduce the vertical size of the list\n                                                             as long as the list isn't big enough to require scrolling, there is no bug ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "field");
          var el2 = dom.createTextNode("\n                  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "ui radio checkbox");
          var el3 = dom.createTextNode("\n                    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("input");
          dom.setAttribute(el3, "type", "radio");
          dom.setAttribute(el3, "name", "studentChoice");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("label");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n                      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("  ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [3, 1]);
          var element1 = dom.childAt(element0, [1]);
          var element2 = dom.childAt(element0, [3]);
          var morphs = new Array(5);
          morphs[0] = dom.createAttrMorph(element1, 'onchange');
          morphs[1] = dom.createMorphAt(element2, 0, 0);
          morphs[2] = dom.createMorphAt(element2, 2, 2);
          morphs[3] = dom.createMorphAt(element2, 4, 4);
          morphs[4] = dom.createMorphAt(element0, 5, 5);
          return morphs;
        },
        statements: [["attribute", "onchange", ["subexpr", "action", ["getStudent", ["get", "oneStudent", ["loc", [null, [15, 58], [15, 68]]], 0, 0, 0, 0]], [], ["loc", [null, [null, null], [15, 70]]], 0, 0], 0, 0, 0, 0], ["content", "oneStudent.number", ["loc", [null, [16, 27], [16, 48]]], 0, 0, 0, 0], ["content", "oneStudent.firstName", ["loc", [null, [16, 49], [16, 73]]], 0, 0, 0, 0], ["content", "oneStudent.lastName", ["loc", [null, [17, 22], [17, 45]]], 0, 0, 0, 0], ["content", "none", ["loc", [null, [18, 20], [18, 28]]], 0, 0, 0, 0]],
        locals: ["oneStudent"],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 48,
            "column": 0
          }
        },
        "moduleName": "students-records/templates/components/all-students.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui modal");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "header");
        var el3 = dom.createTextNode("List of 10 Students, click the arrow keys to get more students");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "content");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" original location of #each start ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "ui grid");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "ten wide column");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "actions");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "ui form");
        var el7 = dom.createTextNode("\n              ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "grouped fields");
        var el8 = dom.createTextNode("\n                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("              ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "six wide column");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n\n\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" original location of #each end ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "actions");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("hr");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "ui button");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("i");
        dom.setAttribute(el5, "class", "arrow right icon");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "ui button");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("i");
        dom.setAttribute(el5, "class", "arrow left icon");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "ui button");
        var el5 = dom.createTextNode("OK");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element3 = dom.childAt(fragment, [0, 3]);
        var element4 = dom.childAt(element3, [7]);
        var element5 = dom.childAt(element4, [3]);
        var element6 = dom.childAt(element4, [5]);
        var element7 = dom.childAt(element4, [7]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(dom.childAt(element3, [3, 1, 1, 1, 1]), 1, 1);
        morphs[1] = dom.createElementMorph(element5);
        morphs[2] = dom.createElementMorph(element6);
        morphs[3] = dom.createElementMorph(element7);
        return morphs;
      },
      statements: [["block", "each", [["get", "studentsModel", ["loc", [null, [10, 24], [10, 37]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [10, 16], [21, 25]]]], ["element", "action", ["loadNext"], [], ["loc", [null, [36, 29], [36, 50]]], 0, 0], ["element", "action", ["loadPrevious"], [], ["loc", [null, [39, 29], [39, 54]]], 0, 0], ["element", "action", ["exit"], [], ["loc", [null, [42, 29], [42, 46]]], 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("students-records/templates/components/find-student", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 16,
            "column": 6
          }
        },
        "moduleName": "students-records/templates/components/find-student.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui modal");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("i");
        dom.setAttribute(el2, "class", "close icon");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "header");
        var el3 = dom.createTextNode("\n    Profile Picture\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "actions");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "ui black deny button");
        dom.setAttribute(el3, "action", "exit");
        var el4 = dom.createTextNode("\n      Nope\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "ui positive right labeled icon button");
        var el4 = dom.createTextNode("\n      Yep, that's me\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("students-records/templates/components/help-info", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 4
          }
        },
        "moduleName": "students-records/templates/components/help-info.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode("Help Info Goes Here");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("\n  help me on using App\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("students-records/templates/components/home-page", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 30,
              "column": 6
            },
            "end": {
              "line": 32,
              "column": 6
            }
          },
          "moduleName": "students-records/templates/components/home-page.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["content", "welcome-page", ["loc", [null, [31, 8], [31, 24]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 33,
              "column": 6
            },
            "end": {
              "line": 35,
              "column": 6
            }
          },
          "moduleName": "students-records/templates/components/home-page.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["content", "student-data-entry", ["loc", [null, [34, 8], [34, 30]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 36,
              "column": 6
            },
            "end": {
              "line": 38,
              "column": 6
            }
          },
          "moduleName": "students-records/templates/components/home-page.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["content", "about-us", ["loc", [null, [37, 8], [37, 20]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 39,
              "column": 6
            },
            "end": {
              "line": 41,
              "column": 6
            }
          },
          "moduleName": "students-records/templates/components/home-page.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["content", "help-info", ["loc", [null, [40, 8], [40, 21]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 44,
            "column": 6
          }
        },
        "moduleName": "students-records/templates/components/home-page.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui grid");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "three wide column");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "ui violet vertical pointing menu");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "class", "item active");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("i");
        dom.setAttribute(el5, "class", "large home icon");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        Home\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "class", "item");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("i");
        dom.setAttribute(el5, "class", "large leanpub icon");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        Students Records\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "item");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "class", "item ");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("i");
        dom.setAttribute(el5, "class", "large user icon");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        About\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "class", "item ");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("i");
        dom.setAttribute(el5, "class", "large help icon");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        Help\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "thirteen wide column ");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "ui segment container");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1, 1]);
        var element2 = dom.childAt(element1, [1]);
        var element3 = dom.childAt(element1, [3]);
        var element4 = dom.childAt(element1, [7]);
        var element5 = dom.childAt(element1, [9]);
        var element6 = dom.childAt(element0, [3, 1]);
        var morphs = new Array(8);
        morphs[0] = dom.createElementMorph(element2);
        morphs[1] = dom.createElementMorph(element3);
        morphs[2] = dom.createElementMorph(element4);
        morphs[3] = dom.createElementMorph(element5);
        morphs[4] = dom.createMorphAt(element6, 1, 1);
        morphs[5] = dom.createMorphAt(element6, 2, 2);
        morphs[6] = dom.createMorphAt(element6, 3, 3);
        morphs[7] = dom.createMorphAt(element6, 4, 4);
        return morphs;
      },
      statements: [["element", "action", ["home"], [], ["loc", [null, [4, 29], [4, 46]]], 0, 0], ["element", "action", ["studentsDataEntry"], [], ["loc", [null, [8, 22], [8, 52]]], 0, 0], ["element", "action", ["about"], [], ["loc", [null, [16, 23], [16, 41]]], 0, 0], ["element", "action", ["help"], [], ["loc", [null, [21, 23], [21, 40]]], 0, 0], ["block", "if", [["get", "isHomeShowing", ["loc", [null, [30, 12], [30, 25]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [30, 6], [32, 13]]]], ["block", "if", [["get", "isStudentsRecordsDataEntry", ["loc", [null, [33, 12], [33, 38]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [33, 6], [35, 13]]]], ["block", "if", [["get", "isAboutShowing", ["loc", [null, [36, 12], [36, 26]]], 0, 0, 0, 0]], [], 2, null, ["loc", [null, [36, 6], [38, 13]]]], ["block", "if", [["get", "isHelpShowing", ["loc", [null, [39, 12], [39, 25]]], 0, 0, 0, 0]], [], 3, null, ["loc", [null, [39, 6], [41, 13]]]]],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  })());
});
define("students-records/templates/components/manage-system-code", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 2
            },
            "end": {
              "line": 23,
              "column": 2
            }
          },
          "moduleName": "students-records/templates/components/manage-system-code.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "item");
          var el2 = dom.createTextNode("\n\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("On select will set target model, but onchange will pass the value of the field ");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "ui input");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("input");
          dom.setAttribute(el3, "type", "text");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      \n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("Remove Button ");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          dom.setAttribute(el2, "class", "ui icon button");
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("i");
          dom.setAttribute(el3, "class", "remove circle icon");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment(" end of list element !");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element11 = dom.childAt(fragment, [1]);
          var element12 = dom.childAt(element11, [3, 1]);
          var element13 = dom.childAt(element11, [7]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element12, 'value');
          morphs[1] = dom.createAttrMorph(element12, 'onclick');
          morphs[2] = dom.createAttrMorph(element12, 'onchange');
          morphs[3] = dom.createElementMorph(element13);
          return morphs;
        },
        statements: [["attribute", "value", ["get", "residencyChoice.name", ["loc", [null, [12, 33], [12, 53]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "onclick", ["subexpr", "action", ["setCurrentModel", ["get", "residencyChoice", ["loc", [null, [12, 91], [12, 106]]], 0, 0, 0, 0]], [], ["loc", [null, [null, null], [12, 108]]], 0, 0], 0, 0, 0, 0], ["attribute", "onchange", ["subexpr", "action", ["editItem"], ["value", "target.value"], ["loc", [null, [null, null], [13, 42]]], 0, 0], 0, 0, 0, 0], ["element", "action", ["removeItem", ["get", "residencyChoice", ["loc", [null, [17, 57], [17, 72]]], 0, 0, 0, 0]], [], ["loc", [null, [17, 35], [17, 75]]], 0, 0]],
        locals: ["residencyChoice"],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 29,
              "column": 0
            },
            "end": {
              "line": 37,
              "column": 0
            }
          },
          "moduleName": "students-records/templates/components/manage-system-code.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("form");
          dom.setAttribute(el1, "class", "ui form");
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "ui input");
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          dom.setAttribute(el2, "class", "ui button");
          var el3 = dom.createTextNode("Save");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          dom.setAttribute(el2, "class", "ui button");
          var el3 = dom.createTextNode("Cancel");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element8 = dom.childAt(fragment, [0]);
          var element9 = dom.childAt(element8, [3]);
          var element10 = dom.childAt(element8, [5]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(dom.childAt(element8, [1]), 1, 1);
          morphs[1] = dom.createElementMorph(element9);
          morphs[2] = dom.createElementMorph(element10);
          return morphs;
        },
        statements: [["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "rName", ["loc", [null, [32, 32], [32, 37]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", "Enter Name"], ["loc", [null, [32, 4], [32, 64]]], 0, 0], ["element", "action", ["saveResidency"], [], ["loc", [null, [34, 28], [34, 54]]], 0, 0], ["element", "action", ["cancelNewResidency"], [], ["loc", [null, [35, 28], [35, 59]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 37,
              "column": 0
            },
            "end": {
              "line": 42,
              "column": 12
            }
          },
          "moduleName": "students-records/templates/components/manage-system-code.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("Toggle Button for Add !");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "class", "ui button");
          var el2 = dom.createTextNode("\n     ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("i");
          dom.setAttribute(el2, "class", "plus icon");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element7 = dom.childAt(fragment, [3]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element7);
          return morphs;
        },
        statements: [["element", "action", ["addNewResidency"], [], ["loc", [null, [40, 26], [40, 54]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 49,
              "column": 2
            },
            "end": {
              "line": 66,
              "column": 2
            }
          },
          "moduleName": "students-records/templates/components/manage-system-code.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "item");
          var el2 = dom.createTextNode("\n\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("On select will set target model, but onchange will pass the value of the field ");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "ui input");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("input");
          dom.setAttribute(el3, "type", "text");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      \n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("Remove Button ");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          dom.setAttribute(el2, "class", "ui icon button");
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("i");
          dom.setAttribute(el3, "class", "remove circle icon");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment(" end of list element !");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element4 = dom.childAt(fragment, [1]);
          var element5 = dom.childAt(element4, [3, 1]);
          var element6 = dom.childAt(element4, [7]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element5, 'value');
          morphs[1] = dom.createAttrMorph(element5, 'onclick');
          morphs[2] = dom.createAttrMorph(element5, 'onchange');
          morphs[3] = dom.createElementMorph(element6);
          return morphs;
        },
        statements: [["attribute", "value", ["get", "genderChoice.name", ["loc", [null, [55, 33], [55, 50]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "onclick", ["subexpr", "action", ["setCurrentModel", ["get", "genderChoice", ["loc", [null, [55, 88], [55, 100]]], 0, 0, 0, 0]], [], ["loc", [null, [null, null], [55, 102]]], 0, 0], 0, 0, 0, 0], ["attribute", "onchange", ["subexpr", "action", ["editItem"], ["value", "target.value"], ["loc", [null, [null, null], [56, 42]]], 0, 0], 0, 0, 0, 0], ["element", "action", ["removeItem", ["get", "genderChoice", ["loc", [null, [60, 57], [60, 69]]], 0, 0, 0, 0]], [], ["loc", [null, [60, 35], [60, 72]]], 0, 0]],
        locals: ["genderChoice"],
        templates: []
      };
    })();
    var child4 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 72,
              "column": 0
            },
            "end": {
              "line": 80,
              "column": 0
            }
          },
          "moduleName": "students-records/templates/components/manage-system-code.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("form");
          dom.setAttribute(el1, "class", "ui form");
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "ui input");
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          dom.setAttribute(el2, "class", "ui button");
          var el3 = dom.createTextNode("Save");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          dom.setAttribute(el2, "class", "ui button");
          var el3 = dom.createTextNode("Cancel");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [0]);
          var element2 = dom.childAt(element1, [3]);
          var element3 = dom.childAt(element1, [5]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]), 1, 1);
          morphs[1] = dom.createElementMorph(element2);
          morphs[2] = dom.createElementMorph(element3);
          return morphs;
        },
        statements: [["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "gName", ["loc", [null, [75, 32], [75, 37]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", "Enter Name"], ["loc", [null, [75, 4], [75, 64]]], 0, 0], ["element", "action", ["saveGender"], [], ["loc", [null, [77, 28], [77, 51]]], 0, 0], ["element", "action", ["cancelNewGender"], [], ["loc", [null, [78, 28], [78, 56]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child5 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 80,
              "column": 0
            },
            "end": {
              "line": 85,
              "column": 12
            }
          },
          "moduleName": "students-records/templates/components/manage-system-code.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("Toggle Button for Add !");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "class", "ui button");
          var el2 = dom.createTextNode("\n     ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("i");
          dom.setAttribute(el2, "class", "plus icon");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [3]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [["element", "action", ["addNewGender"], [], ["loc", [null, [83, 26], [83, 51]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 85,
            "column": 19
          }
        },
        "moduleName": "students-records/templates/components/manage-system-code.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode(" Residency ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui list");
        var el2 = dom.createTextNode("\n\n ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("Editing option for each residency ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" end of list!");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" Form to add new !");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode(" Gender ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui list");
        var el2 = dom.createTextNode("\n\n ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("Editing option for each gender ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" end of list!");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" Form to add new !");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [4]), 3, 3);
        morphs[1] = dom.createMorphAt(fragment, 10, 10, contextualElement);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [14]), 3, 3);
        morphs[3] = dom.createMorphAt(fragment, 20, 20, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "each", [["get", "ResidencyModel", ["loc", [null, [6, 10], [6, 24]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [6, 2], [23, 11]]]], ["block", "if", [["get", "isAddingResidency", ["loc", [null, [29, 6], [29, 23]]], 0, 0, 0, 0]], [], 1, 2, ["loc", [null, [29, 0], [42, 19]]]], ["block", "each", [["get", "GenderModel", ["loc", [null, [49, 10], [49, 21]]], 0, 0, 0, 0]], [], 3, null, ["loc", [null, [49, 2], [66, 11]]]], ["block", "if", [["get", "isAddingGender", ["loc", [null, [72, 6], [72, 20]]], 0, 0, 0, 0]], [], 4, 5, ["loc", [null, [72, 0], [85, 19]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5]
    };
  })());
});
define("students-records/templates/components/show-logo", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "students-records/templates/components/show-logo.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "class", "ui button");
          var el2 = dom.createTextNode("\n    Hide Logo\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1, "class", "ui centered image");
          dom.setAttribute(el1, "src", "/assets/images/se3352a.png");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element1);
          return morphs;
        },
        statements: [["element", "action", ["hideLogo"], [], ["loc", [null, [2, 28], [2, 49]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 0
            },
            "end": {
              "line": 11,
              "column": 0
            }
          },
          "moduleName": "students-records/templates/components/show-logo.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "class", "ui button");
          var el2 = dom.createTextNode("\n    Show Logo\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [["element", "action", ["showLogo"], [], ["loc", [null, [8, 28], [8, 49]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 13,
            "column": 0
          }
        },
        "moduleName": "students-records/templates/components/show-logo.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "logoIsShowing", ["loc", [null, [1, 6], [1, 19]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [1, 0], [11, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("students-records/templates/components/student-data-entry", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 41,
              "column": 0
            },
            "end": {
              "line": 45,
              "column": 0
            }
          },
          "moduleName": "students-records/templates/components/student-data-entry.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n \n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "find-student", [], ["notDONE", ["subexpr", "@mut", [["get", "showFindStudent", ["loc", [null, [43, 26], [43, 41]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [43, 1], [43, 44]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 47,
              "column": 0
            },
            "end": {
              "line": 50,
              "column": 0
            }
          },
          "moduleName": "students-records/templates/components/student-data-entry.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment(" Note that offset is an \"in\" and \"out\" parameter !");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          return morphs;
        },
        statements: [["inline", "all-students", [], ["INDEX", ["subexpr", "@mut", [["get", "currentIndex", ["loc", [null, [49, 24], [49, 36]]], 0, 0, 0, 0]], [], [], 0, 0], "notDONE", ["subexpr", "@mut", [["get", "showAllStudents", ["loc", [null, [49, 47], [49, 62]]], 0, 0, 0, 0]], [], [], 0, 0], "offset", ["subexpr", "@mut", [["get", "offset", ["loc", [null, [49, 72], [49, 78]]], 0, 0, 0, 0]], [], [], 0, 0], "studentsModel", ["subexpr", "@mut", [["get", "studentsRecords", ["loc", [null, [49, 95], [49, 110]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [49, 1], [49, 112]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.9.1",
            "loc": {
              "source": null,
              "start": {
                "line": 89,
                "column": 14
              },
              "end": {
                "line": 92,
                "column": 14
              }
            },
            "moduleName": "students-records/templates/components/student-data-entry.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("option");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode(" ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element4 = dom.childAt(fragment, [1]);
            var morphs = new Array(3);
            morphs[0] = dom.createAttrMorph(element4, 'value');
            morphs[1] = dom.createAttrMorph(element4, 'selected');
            morphs[2] = dom.createMorphAt(element4, 0, 0);
            return morphs;
          },
          statements: [["attribute", "value", ["get", "genderChoice.id", ["loc", [null, [90, 32], [90, 47]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "selected", ["subexpr", "eq", [["get", "currentStudent.genInfo.id", ["loc", [null, [90, 64], [90, 89]]], 0, 0, 0, 0], ["get", "genderChoice.id", ["loc", [null, [91, 67], [91, 82]]], 0, 0, 0, 0]], [], ["loc", [null, [null, null], [91, 84]]], 0, 0], 0, 0, 0, 0], ["content", "genderChoice.name", ["loc", [null, [91, 85], [91, 106]]], 0, 0, 0, 0]],
          locals: ["genderChoice"],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.9.1",
            "loc": {
              "source": null,
              "start": {
                "line": 102,
                "column": 14
              },
              "end": {
                "line": 105,
                "column": 14
              }
            },
            "moduleName": "students-records/templates/components/student-data-entry.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("option");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode(" ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element3 = dom.childAt(fragment, [1]);
            var morphs = new Array(3);
            morphs[0] = dom.createAttrMorph(element3, 'value');
            morphs[1] = dom.createAttrMorph(element3, 'selected');
            morphs[2] = dom.createMorphAt(element3, 0, 0);
            return morphs;
          },
          statements: [["attribute", "value", ["get", "residencyChoice.id", ["loc", [null, [103, 32], [103, 50]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "selected", ["subexpr", "eq", [["get", "currentStudent.resInfo.id", ["loc", [null, [103, 67], [103, 92]]], 0, 0, 0, 0], ["get", "residencyChoice.id", ["loc", [null, [104, 67], [104, 85]]], 0, 0, 0, 0]], [], ["loc", [null, [null, null], [104, 87]]], 0, 0], 0, 0, 0, 0], ["content", "residencyChoice.name", ["loc", [null, [104, 88], [104, 112]]], 0, 0, 0, 0]],
          locals: ["residencyChoice"],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "revision": "Ember@2.9.1",
            "loc": {
              "source": null,
              "start": {
                "line": 141,
                "column": 4
              },
              "end": {
                "line": 155,
                "column": 4
              }
            },
            "moduleName": "students-records/templates/components/student-data-entry.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("br");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" Name:\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("br");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("          \n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("br");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" note:\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("br");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("br");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("input");
            dom.setAttribute(el1, "type", "text");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("input");
            dom.setAttribute(el1, "type", "text");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n      \n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            var el2 = dom.createTextNode("Delete scholarship");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [15]);
            var element1 = dom.childAt(fragment, [17]);
            var element2 = dom.childAt(fragment, [19]);
            var morphs = new Array(9);
            morphs[0] = dom.createMorphAt(fragment, 5, 5, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 11, 11, contextualElement);
            morphs[2] = dom.createAttrMorph(element0, 'value');
            morphs[3] = dom.createAttrMorph(element0, 'onclick');
            morphs[4] = dom.createAttrMorph(element0, 'onchange');
            morphs[5] = dom.createAttrMorph(element1, 'value');
            morphs[6] = dom.createAttrMorph(element1, 'onclick');
            morphs[7] = dom.createAttrMorph(element1, 'onchange');
            morphs[8] = dom.createElementMorph(element2);
            return morphs;
          },
          statements: [["content", "scholarship.scholarshipID", ["loc", [null, [143, 11], [143, 40]]], 0, 0, 0, 0], ["content", "scholarship.note", ["loc", [null, [145, 11], [145, 31]]], 0, 0, 0, 0], ["attribute", "value", ["get", "scholarship.scholarshipID", ["loc", [null, [148, 33], [148, 58]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "onclick", ["subexpr", "action", ["setCurrentInputScholarship", ["get", "scholarship", ["loc", [null, [148, 107], [148, 118]]], 0, 0, 0, 0]], [], ["loc", [null, [null, null], [148, 120]]], 0, 0], 0, 0, 0, 0], ["attribute", "onchange", ["subexpr", "action", ["editScholarshipID"], ["value", "target.value"], ["loc", [null, [null, null], [149, 66]]], 0, 0], 0, 0, 0, 0], ["attribute", "value", ["get", "scholarship.note", ["loc", [null, [151, 33], [151, 49]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "onclick", ["subexpr", "action", ["setCurrentInputScholarship", ["get", "scholarship", ["loc", [null, [151, 98], [151, 109]]], 0, 0, 0, 0]], [], ["loc", [null, [null, null], [151, 111]]], 0, 0], 0, 0, 0, 0], ["attribute", "onchange", ["subexpr", "action", ["editScholarshipNote"], ["value", "target.value"], ["loc", [null, [null, null], [152, 68]]], 0, 0], 0, 0, 0, 0], ["element", "action", ["deleteScholarship", ["get", "scholarship", ["loc", [null, [154, 43], [154, 54]]], 0, 0, 0, 0]], [], ["loc", [null, [154, 14], [154, 56]]], 0, 0]],
          locals: ["scholarship"],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 50,
              "column": 0
            },
            "end": {
              "line": 221,
              "column": 0
            }
          },
          "moduleName": "students-records/templates/components/student-data-entry.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment(" Show data entry form ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment(" This makes all the tabs visiable, this is not where they become clickable !");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "ui top attached tabular menu");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "active item");
          dom.setAttribute(el2, "data-tab", "basics");
          var el3 = dom.createTextNode("Basic Info");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "item");
          dom.setAttribute(el2, "data-tab", "advanceStanding");
          var el3 = dom.createTextNode("Advance Standing");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "item");
          dom.setAttribute(el2, "data-tab", "scholarshipsAwards");
          var el3 = dom.createTextNode("Scholarships And Awards");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "item");
          dom.setAttribute(el2, "data-tab", "registrationInfo");
          var el3 = dom.createTextNode("Registration Info");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "item");
          dom.setAttribute(el2, "data-tab", "systemCode");
          var el3 = dom.createTextNode("Manage System Code");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    \n\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "ui bottom attached active tab segment");
          dom.setAttribute(el1, "data-tab", "basics");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment(" student basic information !");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "ui grid");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "ui right aligned  seven wide column");
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "ui form");
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "inline field");
          var el6 = dom.createTextNode("\n            ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("label");
          var el7 = dom.createTextNode("Student Number");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n            ");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n          ");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "inline field");
          var el6 = dom.createTextNode("\n            ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("label");
          var el7 = dom.createTextNode("First Name");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n            ");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n          ");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "inline field");
          var el6 = dom.createTextNode("\n            ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("label");
          var el7 = dom.createTextNode("Last Name");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n            ");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n          ");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "inline field");
          var el6 = dom.createTextNode("\n            ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("label");
          var el7 = dom.createTextNode("Gender");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n             ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("select");
          var el7 = dom.createTextNode("\n");
          dom.appendChild(el6, el7);
          var el7 = dom.createComment("");
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode("            ");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n          ");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "inline field");
          var el6 = dom.createTextNode("\n            ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("label");
          var el7 = dom.createTextNode("Date of Birth");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n            ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("input");
          dom.setAttribute(el6, "type", "date");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n          ");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "inline field");
          var el6 = dom.createTextNode("\n            ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("label");
          var el7 = dom.createTextNode("Residency");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("      \n            ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("select");
          var el7 = dom.createTextNode("\n");
          dom.appendChild(el6, el7);
          var el7 = dom.createComment("");
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode("            ");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n          ");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n        ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment(" Show student photo ");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "ui center aligned  seven wide column segment");
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("img");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "ui tab");
          dom.setAttribute(el1, "data-tab", "advanceStanding");
          var el2 = dom.createTextNode(" \n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h2");
          var el3 = dom.createTextNode("Information for Advance Standing");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h3");
          var el3 = dom.createTextNode("\n      Course\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("br");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      Description\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("br");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      Units\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("br");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      Grade\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("br");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      From\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "ui tab");
          dom.setAttribute(el1, "data-tab", "scholarshipsAwards");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h2");
          var el3 = dom.createTextNode("Information for Scholarships and Awards");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          var el3 = dom.createTextNode("Create new scholarship");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "ui tab");
          dom.setAttribute(el1, "data-tab", "registrationInfo");
          var el2 = dom.createTextNode("\n     ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h3");
          var el3 = dom.createTextNode("\n      Registration Comments:  \n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("br");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("br");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n       ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("input");
          dom.setAttribute(el3, "type", "text");
          dom.setAttribute(el3, "class", "form-control");
          dom.setAttribute(el3, "placeholder", "Registration comments");
          dom.setAttribute(el3, "autofocus", "autofocus");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("br");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      Basis Of Admission: \n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("br");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("br");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("input");
          dom.setAttribute(el3, "type", "text");
          dom.setAttribute(el3, "class", "form-control");
          dom.setAttribute(el3, "placeholder", "Basis of admission");
          dom.setAttribute(el3, "autofocus", "autofocus");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("br");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("    \n      Admission average\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("br");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("br");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("input");
          dom.setAttribute(el3, "type", "number");
          dom.setAttribute(el3, "class", "form-control");
          dom.setAttribute(el3, "placeholder", "Admission average");
          dom.setAttribute(el3, "autofocus", "autofocus");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("br");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      Admission Comments\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("br");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("br");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("  \n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("input");
          dom.setAttribute(el3, "type", "text");
          dom.setAttribute(el3, "class", "form-control");
          dom.setAttribute(el3, "placeholder", "Admission comments");
          dom.setAttribute(el3, "autofocus", "autofocus");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n\n\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment(" OLD TABS THAT WE ARE KEEPING FOR THE TIME BEING, probably wont need!");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "ui tab");
          dom.setAttribute(el1, "data-tab", "program");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment(" Program records, courses and grades !");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h2");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h3");
          var el3 = dom.createTextNode(" ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode(" ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "ui tab");
          dom.setAttribute(el1, "data-tab", "others");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment(" Others !");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h2");
          var el3 = dom.createTextNode("Other data");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment(" OLD TABS THAT WE ARE KEEPING FOR THE TIME BEING, probably wont need and isnt showing right now!");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n\n   ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "ui tab");
          dom.setAttribute(el1, "data-tab", "systemCode");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment(" Manage System Code !");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    \n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element5 = dom.childAt(fragment, [7, 3]);
          var element6 = dom.childAt(element5, [1, 1]);
          var element7 = dom.childAt(element6, [7, 3]);
          var element8 = dom.childAt(element6, [9, 3]);
          var element9 = dom.childAt(element6, [11, 3]);
          var element10 = dom.childAt(element5, [5, 1]);
          var element11 = dom.childAt(fragment, [12]);
          var element12 = dom.childAt(element11, [7]);
          var element13 = dom.childAt(fragment, [14, 4]);
          var element14 = dom.childAt(element13, [7]);
          var element15 = dom.childAt(element13, [17]);
          var element16 = dom.childAt(element13, [27]);
          var element17 = dom.childAt(element13, [37]);
          var element18 = dom.childAt(fragment, [18]);
          var element19 = dom.childAt(element18, [7]);
          var morphs = new Array(28);
          morphs[0] = dom.createMorphAt(dom.childAt(element6, [1]), 3, 3);
          morphs[1] = dom.createMorphAt(dom.childAt(element6, [3]), 3, 3);
          morphs[2] = dom.createMorphAt(dom.childAt(element6, [5]), 3, 3);
          morphs[3] = dom.createAttrMorph(element7, 'onchange');
          morphs[4] = dom.createMorphAt(element7, 1, 1);
          morphs[5] = dom.createAttrMorph(element8, 'value');
          morphs[6] = dom.createAttrMorph(element8, 'onchange');
          morphs[7] = dom.createAttrMorph(element9, 'onchange');
          morphs[8] = dom.createMorphAt(element9, 1, 1);
          morphs[9] = dom.createAttrMorph(element10, 'src');
          morphs[10] = dom.createMorphAt(element11, 3, 3);
          morphs[11] = dom.createElementMorph(element12);
          morphs[12] = dom.createMorphAt(element13, 3, 3);
          morphs[13] = dom.createAttrMorph(element14, 'value');
          morphs[14] = dom.createAttrMorph(element14, 'onchange');
          morphs[15] = dom.createMorphAt(element13, 13, 13);
          morphs[16] = dom.createAttrMorph(element15, 'value');
          morphs[17] = dom.createAttrMorph(element15, 'onchange');
          morphs[18] = dom.createMorphAt(element13, 23, 23);
          morphs[19] = dom.createAttrMorph(element16, 'value');
          morphs[20] = dom.createAttrMorph(element16, 'onchange');
          morphs[21] = dom.createMorphAt(element13, 33, 33);
          morphs[22] = dom.createAttrMorph(element17, 'value');
          morphs[23] = dom.createAttrMorph(element17, 'onchange');
          morphs[24] = dom.createMorphAt(dom.childAt(element18, [5]), 0, 0);
          morphs[25] = dom.createMorphAt(element19, 1, 1);
          morphs[26] = dom.createMorphAt(element19, 3, 3);
          morphs[27] = dom.createMorphAt(dom.childAt(fragment, [24]), 3, 3);
          return morphs;
        },
        statements: [["inline", "input", [], ["size", "10", "type", "text", "value", ["subexpr", "@mut", [["get", "currentStudent.number", ["loc", [null, [76, 51], [76, 72]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [76, 12], [76, 74]]], 0, 0], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "currentStudent.firstName", ["loc", [null, [80, 41], [80, 65]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [80, 12], [80, 67]]], 0, 0], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "currentStudent.lastName", ["loc", [null, [84, 40], [84, 63]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [84, 12], [84, 66]]], 0, 0], ["attribute", "onchange", ["subexpr", "action", ["selectGender"], ["value", "target.value"], ["loc", [null, [null, null], [88, 76]]], 0, 0], 0, 0, 0, 0], ["block", "each", [["get", "genderModel", ["loc", [null, [89, 22], [89, 33]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [89, 14], [92, 23]]]], ["attribute", "value", ["get", "selectedDate", ["loc", [null, [97, 27], [97, 39]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "onchange", ["subexpr", "action", ["assignDate"], ["value", "target.value"], ["loc", [null, [null, null], [97, 107]]], 0, 0], 0, 0, 0, 0], ["attribute", "onchange", ["subexpr", "action", ["selectResidency"], ["value", "target.value"], ["loc", [null, [null, null], [101, 78]]], 0, 0], 0, 0, 0, 0], ["block", "each", [["get", "residencyModel", ["loc", [null, [102, 22], [102, 36]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [102, 14], [105, 23]]]], ["attribute", "src", ["get", "studentPhoto", ["loc", [null, [112, 20], [112, 32]]], 0, 0, 0, 0], 0, 0, 0, 0], ["block", "each", [["get", "scholarshipRecords", ["loc", [null, [141, 12], [141, 30]]], 0, 0, 0, 0]], [], 2, null, ["loc", [null, [141, 4], [155, 13]]]], ["element", "action", ["createNewScholarship"], [], ["loc", [null, [158, 12], [158, 45]]], 0, 0], ["content", "currentStudent.registrationComments", ["loc", [null, [167, 6], [167, 45]]], 0, 0, 0, 0], ["attribute", "value", ["get", "currentStudent.registrationComments", ["loc", [null, [169, 34], [169, 69]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "onchange", ["subexpr", "action", ["editRegistrationComments"], ["value", "target.value"], ["loc", [null, [null, null], [170, 96]]], 0, 0], 0, 0, 0, 0], ["content", "currentStudent.basisOfAdmission", ["loc", [null, [174, 6], [174, 41]]], 0, 0, 0, 0], ["attribute", "value", ["get", "currentStudent.basisOfAdmission", ["loc", [null, [176, 33], [176, 64]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "onchange", ["subexpr", "action", ["editBasisOfAdmission"], ["value", "target.value"], ["loc", [null, [null, null], [177, 91]]], 0, 0], 0, 0, 0, 0], ["content", "currentStudent.admissionAverage", ["loc", [null, [181, 6], [181, 41]]], 0, 0, 0, 0], ["attribute", "value", ["get", "currentStudent.admissionAverage", ["loc", [null, [183, 35], [183, 66]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "onchange", ["subexpr", "action", ["editAdmissionAverage"], ["value", "target.value"], ["loc", [null, [null, null], [184, 91]]], 0, 0], 0, 0, 0, 0], ["content", "currentStudent.admissionComments", ["loc", [null, [188, 6], [188, 42]]], 0, 0, 0, 0], ["attribute", "value", ["get", "currentStudent.admissionComments", ["loc", [null, [190, 33], [190, 65]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "onchange", ["subexpr", "action", ["editAdmissionComments"], ["value", "target.value"], ["loc", [null, [null, null], [191, 92]]], 0, 0], 0, 0, 0, 0], ["content", "currentStudent.number", ["loc", [null, [202, 8], [202, 33]]], 0, 0, 0, 0], ["content", "currentStudent.firstName", ["loc", [null, [203, 11], [203, 39]]], 0, 0, 0, 0], ["content", "currentStudent.lastName", ["loc", [null, [203, 40], [203, 67]]], 0, 0, 0, 0], ["inline", "manage-system-code", [], ["ResidencyModel", ["subexpr", "@mut", [["get", "residencyModel", ["loc", [null, [217, 42], [217, 56]]], 0, 0, 0, 0]], [], [], 0, 0], "GenderModel", ["subexpr", "@mut", [["get", "genderModel", ["loc", [null, [217, 71], [217, 82]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [217, 4], [217, 85]]], 0, 0]],
        locals: [],
        templates: [child0, child1, child2]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 223,
            "column": 0
          }
        },
        "moduleName": "students-records/templates/components/student-data-entry.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui center aligned header");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h2");
        var el3 = dom.createTextNode("Students Records Data Entry");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" Show the menu bar");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui inverted menu");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "item");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("i");
        dom.setAttribute(el3, "class", "save icon");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    Save\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "item");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("i");
        dom.setAttribute(el3, "class", "undo icon");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    Undo\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "item");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("i");
        dom.setAttribute(el3, "class", "step backward icon");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    First\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "item");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("i");
        dom.setAttribute(el3, "class", "arrow left icon");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    Previous\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "item");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("i");
        dom.setAttribute(el3, "class", "arrow right icon");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    Next\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "item");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("i");
        dom.setAttribute(el3, "class", "step forward icon");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    Last\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "item");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("i");
        dom.setAttribute(el3, "class", "content icon");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    All Records\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "item");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("i");
        dom.setAttribute(el3, "class", "search icon");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    Find Record\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element20 = dom.childAt(fragment, [4]);
        var element21 = dom.childAt(element20, [1]);
        var element22 = dom.childAt(element20, [3]);
        var element23 = dom.childAt(element20, [5]);
        var element24 = dom.childAt(element20, [7]);
        var element25 = dom.childAt(element20, [9]);
        var element26 = dom.childAt(element20, [11]);
        var element27 = dom.childAt(element20, [13]);
        var element28 = dom.childAt(element20, [15]);
        var morphs = new Array(10);
        morphs[0] = dom.createElementMorph(element21);
        morphs[1] = dom.createElementMorph(element22);
        morphs[2] = dom.createElementMorph(element23);
        morphs[3] = dom.createElementMorph(element24);
        morphs[4] = dom.createElementMorph(element25);
        morphs[5] = dom.createElementMorph(element26);
        morphs[6] = dom.createElementMorph(element27);
        morphs[7] = dom.createElementMorph(element28);
        morphs[8] = dom.createMorphAt(fragment, 6, 6, contextualElement);
        morphs[9] = dom.createMorphAt(fragment, 8, 8, contextualElement);
        return morphs;
      },
      statements: [["element", "action", ["saveStudent"], [], ["loc", [null, [7, 18], [7, 42]]], 0, 0], ["element", "action", ["undoSave"], [], ["loc", [null, [11, 18], [11, 39]]], 0, 0], ["element", "action", ["firstStudent"], [], ["loc", [null, [15, 18], [15, 43]]], 0, 0], ["element", "action", ["previousStudent"], [], ["loc", [null, [19, 18], [19, 46]]], 0, 0], ["element", "action", ["nextStudent"], [], ["loc", [null, [23, 18], [23, 42]]], 0, 0], ["element", "action", ["lastStudent"], [], ["loc", [null, [27, 18], [27, 42]]], 0, 0], ["element", "action", ["allStudents"], [], ["loc", [null, [31, 18], [31, 42]]], 0, 0], ["element", "action", ["findStudent"], [], ["loc", [null, [35, 18], [35, 42]]], 0, 0], ["block", "if", [["get", "showFindStudent", ["loc", [null, [41, 6], [41, 21]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [41, 0], [45, 7]]]], ["block", "if", [["get", "showAllStudents", ["loc", [null, [47, 6], [47, 21]]], 0, 0, 0, 0]], [], 1, 2, ["loc", [null, [47, 0], [221, 7]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("students-records/templates/components/ui-accordion", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 28
          }
        },
        "moduleName": "students-records/templates/components/ui-accordion.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "yield", [["subexpr", "action", ["execute"], [], ["loc", [null, [1, 8], [1, 26]]], 0, 0]], [], ["loc", [null, [1, 0], [1, 28]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("students-records/templates/components/ui-checkbox", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 28
          }
        },
        "moduleName": "students-records/templates/components/ui-checkbox.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("input");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("label");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        if (this.cachedFragment) {
          dom.repairClonedNode(element0, [], true);
        }
        var morphs = new Array(7);
        morphs[0] = dom.createAttrMorph(element0, 'type');
        morphs[1] = dom.createAttrMorph(element0, 'name');
        morphs[2] = dom.createAttrMorph(element0, 'tabindex');
        morphs[3] = dom.createAttrMorph(element0, 'checked');
        morphs[4] = dom.createAttrMorph(element0, 'disabled');
        morphs[5] = dom.createMorphAt(dom.childAt(fragment, [2]), 0, 0);
        morphs[6] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["attribute", "type", ["get", "type", ["loc", [null, [1, 14], [1, 18]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "name", ["get", "name", ["loc", [null, [2, 14], [2, 18]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "tabindex", ["get", "tabindex", ["loc", [null, [3, 18], [3, 26]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "checked", ["subexpr", "unbound", [["get", "checked", ["loc", [null, [4, 25], [4, 32]]], 0, 0, 0, 0]], [], ["loc", [null, [null, null], [4, 34]]], 0, 0], 0, 0, 0, 0], ["attribute", "disabled", ["subexpr", "unbound", [["get", "disabled", ["loc", [null, [5, 26], [5, 34]]], 0, 0, 0, 0]], [], ["loc", [null, [null, null], [5, 36]]], 0, 0], 0, 0, 0, 0], ["content", "label", ["loc", [null, [6, 7], [6, 16]]], 0, 0, 0, 0], ["inline", "yield", [["subexpr", "action", ["execute"], [], ["loc", [null, [7, 8], [7, 26]]], 0, 0]], [], ["loc", [null, [7, 0], [7, 28]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("students-records/templates/components/ui-dimmer", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "students-records/templates/components/ui-dimmer.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "yield", [["subexpr", "action", ["execute"], [], ["loc", [null, [1, 8], [1, 26]]], 0, 0]], [], ["loc", [null, [1, 0], [1, 28]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("students-records/templates/components/ui-dropdown", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 47
          }
        },
        "moduleName": "students-records/templates/components/ui-dropdown.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "yield", [["subexpr", "action", ["execute"], [], ["loc", [null, [1, 8], [1, 26]]], 0, 0], ["subexpr", "action", ["mapping"], [], ["loc", [null, [1, 27], [1, 45]]], 0, 0]], [], ["loc", [null, [1, 0], [1, 47]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("students-records/templates/components/ui-embed", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 28
          }
        },
        "moduleName": "students-records/templates/components/ui-embed.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "yield", [["subexpr", "action", ["execute"], [], ["loc", [null, [1, 8], [1, 26]]], 0, 0]], [], ["loc", [null, [1, 0], [1, 28]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("students-records/templates/components/ui-modal", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 28
          }
        },
        "moduleName": "students-records/templates/components/ui-modal.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "yield", [["subexpr", "action", ["execute"], [], ["loc", [null, [1, 8], [1, 26]]], 0, 0]], [], ["loc", [null, [1, 0], [1, 28]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("students-records/templates/components/ui-nag", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 28
          }
        },
        "moduleName": "students-records/templates/components/ui-nag.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "yield", [["subexpr", "action", ["execute"], [], ["loc", [null, [1, 8], [1, 26]]], 0, 0]], [], ["loc", [null, [1, 0], [1, 28]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("students-records/templates/components/ui-popup", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 28
          }
        },
        "moduleName": "students-records/templates/components/ui-popup.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "yield", [["subexpr", "action", ["execute"], [], ["loc", [null, [1, 8], [1, 26]]], 0, 0]], [], ["loc", [null, [1, 0], [1, 28]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("students-records/templates/components/ui-progress", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 28
          }
        },
        "moduleName": "students-records/templates/components/ui-progress.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "yield", [["subexpr", "action", ["execute"], [], ["loc", [null, [1, 8], [1, 26]]], 0, 0]], [], ["loc", [null, [1, 0], [1, 28]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("students-records/templates/components/ui-radio", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 28
          }
        },
        "moduleName": "students-records/templates/components/ui-radio.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("input");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("label");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        if (this.cachedFragment) {
          dom.repairClonedNode(element0, [], true);
        }
        var morphs = new Array(7);
        morphs[0] = dom.createAttrMorph(element0, 'type');
        morphs[1] = dom.createAttrMorph(element0, 'name');
        morphs[2] = dom.createAttrMorph(element0, 'tabindex');
        morphs[3] = dom.createAttrMorph(element0, 'checked');
        morphs[4] = dom.createAttrMorph(element0, 'disabled');
        morphs[5] = dom.createMorphAt(dom.childAt(fragment, [2]), 0, 0);
        morphs[6] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["attribute", "type", ["get", "type", ["loc", [null, [1, 14], [1, 18]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "name", ["get", "name", ["loc", [null, [2, 14], [2, 18]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "tabindex", ["get", "tabindex", ["loc", [null, [3, 18], [3, 26]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "checked", ["subexpr", "unbound", [["get", "checked", ["loc", [null, [4, 25], [4, 32]]], 0, 0, 0, 0]], [], ["loc", [null, [null, null], [4, 34]]], 0, 0], 0, 0, 0, 0], ["attribute", "disabled", ["subexpr", "unbound", [["get", "disabled", ["loc", [null, [5, 26], [5, 34]]], 0, 0, 0, 0]], [], ["loc", [null, [null, null], [5, 36]]], 0, 0], 0, 0, 0, 0], ["content", "label", ["loc", [null, [6, 7], [6, 16]]], 0, 0, 0, 0], ["inline", "yield", [["subexpr", "action", ["execute"], [], ["loc", [null, [7, 8], [7, 26]]], 0, 0]], [], ["loc", [null, [7, 0], [7, 28]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("students-records/templates/components/ui-rating", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 28
          }
        },
        "moduleName": "students-records/templates/components/ui-rating.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "yield", [["subexpr", "action", ["execute"], [], ["loc", [null, [1, 8], [1, 26]]], 0, 0]], [], ["loc", [null, [1, 0], [1, 28]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("students-records/templates/components/ui-search", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 28
          }
        },
        "moduleName": "students-records/templates/components/ui-search.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "yield", [["subexpr", "action", ["execute"], [], ["loc", [null, [1, 8], [1, 26]]], 0, 0]], [], ["loc", [null, [1, 0], [1, 28]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("students-records/templates/components/ui-shape", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 28
          }
        },
        "moduleName": "students-records/templates/components/ui-shape.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "yield", [["subexpr", "action", ["execute"], [], ["loc", [null, [1, 8], [1, 26]]], 0, 0]], [], ["loc", [null, [1, 0], [1, 28]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("students-records/templates/components/ui-sidebar", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 28
          }
        },
        "moduleName": "students-records/templates/components/ui-sidebar.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "yield", [["subexpr", "action", ["execute"], [], ["loc", [null, [1, 8], [1, 26]]], 0, 0]], [], ["loc", [null, [1, 0], [1, 28]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("students-records/templates/components/ui-sticky", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 28
          }
        },
        "moduleName": "students-records/templates/components/ui-sticky.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "yield", [["subexpr", "action", ["execute"], [], ["loc", [null, [1, 8], [1, 26]]], 0, 0]], [], ["loc", [null, [1, 0], [1, 28]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("students-records/templates/components/welcome-page", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 0
          }
        },
        "moduleName": "students-records/templates/components/welcome-page.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode("This is a sample Ember code showing:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("ul");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createTextNode("The solution of SE3352a assignment 2");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createTextNode("The powerful of Ember Components");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createTextNode("The integration with Semantic-UI");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("students-records/templates/home", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "students-records/templates/home.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "home-page", ["loc", [null, [1, 0], [1, 13]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define('students-records/utils/get-promise-content', ['exports', 'ember-promise-tools/utils/get-promise-content'], function (exports, _emberPromiseToolsUtilsGetPromiseContent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPromiseToolsUtilsGetPromiseContent['default'];
    }
  });
});
define('students-records/utils/is-fulfilled', ['exports', 'ember-promise-tools/utils/is-fulfilled'], function (exports, _emberPromiseToolsUtilsIsFulfilled) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPromiseToolsUtilsIsFulfilled['default'];
    }
  });
});
define('students-records/utils/is-promise', ['exports', 'ember-promise-tools/utils/is-promise'], function (exports, _emberPromiseToolsUtilsIsPromise) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPromiseToolsUtilsIsPromise['default'];
    }
  });
});
define('students-records/utils/smart-resolve', ['exports', 'ember-promise-tools/utils/smart-resolve'], function (exports, _emberPromiseToolsUtilsSmartResolve) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPromiseToolsUtilsSmartResolve['default'];
    }
  });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('students-records/config/environment', ['ember'], function(Ember) {
  var prefix = 'students-records';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("students-records/app")["default"].create({"name":"students-records","version":"0.0.0+7f9c6ac2"});
}

/* jshint ignore:end */
//# sourceMappingURL=students-records.map
