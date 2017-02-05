import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  showAllStudents: false,
  residencyModel: null,
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


  studentModel: Ember.observer('offset', function () {
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

  fetchStudent: Ember.observer('currentIndex', function () {
    this.showStudentData(this.get('currentIndex'));
  }),
 
  init() {
    this._super(...arguments);
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

  showStudentData: function (index) {
    var tempStudent  = this.get('studentsRecords').objectAt(index);
    this.set('currentStudent', tempStudent);
    this.set('studentPhoto', this.get('currentStudent').get('photo'));
    var date = this.get('currentStudent').get('DOB');
    var datestring = date.toISOString().substring(0, 10);
    this.set('selectedDate', datestring);  
    this.updateScholarships();
  },

  // Gets the scholarships for currentStudent and saves them to scholarshipRecords
  updateScholarships(){
    var self = this;
    this.get('store').query('scholarship', {
      student: self.get('currentStudent').id
    }).then(function(records) {
        self.set('scholarshipRecords', records);
    })
  },

  didRender() {
    Ember.$('.menu .item').tab();
  },

  actions: {
    saveStudent () {
      var updatedStudent = this.get('currentStudent');
      var res = this.get('store').peekRecord('residency', this.get('selectedResidency'));
      updatedStudent.set('gender', this.get('selectedGender'));
      updatedStudent.set('DOB', new Date(this.get('selectedDate')));
      updatedStudent.set('resInfo', res);
      updatedStudent.set('registrationComments', this.get('registrationComments'));
      updatedStudent.set('basisOfAdmission', this.get('basisOfAdmission'));
      var updatedAdmissionAverage = this.get('admissionAverage');

      // Will convert to a method later
      if (updatedAdmissionAverage > 100){
        updatedAdmissionAverage = 100;
      } else if (updatedAdmissionAverage < 0){
        updatedAdmissionAverage = 0;
      }
      updatedStudent.set('admissionAverage', updatedAdmissionAverage);
      updatedStudent.set('admissionComments', this.get('admissionComments'));

      // Saves the student
      updatedStudent.save().then(() => {     
      });

    },

    createNewScholarship(){
      // We only save one way because the default serializer/adapter that we use wont give us a one-to-many JSON
      let scholarship = this.get('store').createRecord('scholarship', {
        scholarshipID: "Mock ID for the scholarship",
        note: "Mock note for a scholarship",
        student: this.get('currentStudent'),
      });

      // Saves the scholarship
      scholarship.save().then(() => {     
        this.updateScholarships();      
      });
    },

    firstStudent() {
      this.set('currentIndex', this.get('firstIndex'));
    },

    nextStudent() {
      this.set('movingBackword' , false);
      if (this.get('currentIndex') < this.get('lastIndex')) {
        this.set('currentIndex', this.get('currentIndex') + 1);
        //     console.log(JSON.stringify(this.get('currentStudent')));
      }
      else {
        this.set('offset', this.get('offset') + this.get('pageSize'));
      }
    },

    previousStudent() {
      this.set('movingBackword' , true);
      if (this.get('currentIndex') > 0) {
        this.set('currentIndex', this.get('currentIndex') - 1);
      }
      else if (this.get('offset') > 0) {
        this.set('offset', this.get('offset') - this.get('pageSize'));
      }
    },

    lastStudent() {
      this.set('currentIndex', this.get('lastIndex'));
    },

    allStudents() {
      this.set('showAllStudents', true);
    },

    selectGender (gender){
      this.set('selectedGender', gender);
    },

    selectResidency (residency){
      this.set('selectedResidency', residency);
    },

    assignDate (date){
      this.set('selectedDate', date);
    },
  }
});
