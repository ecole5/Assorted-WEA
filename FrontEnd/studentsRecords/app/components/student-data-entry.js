import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
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
  advanceStandingEditing: null,


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
      offset: self.get('offset')
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
    this.fetchAdanceStanding();
  },

  fetchAdanceStanding(){
    var self = this;
    this.get('store').query('advancestanding', {
      student: self.get('currentStudent').id
    }).then(function(records) {
        self.set('advanceStandingRecords', records);
    });
  },

  loadScholarshipsFromStore(){
    //his.set('scholarshipRecords',this.get('store').peekAll('scholarship'));
  },

  // Gets the scholarships for currentStudent and saves them to scholarshipRecords
  //fix what ever is going on with the RExist stuff. it should be in the above function
  updateScholarships(){
    var self = this;
    this.get('store').query('scholarship', {
      student: self.get('currentStudent').id
    }).then(function(records) {
        self.set('scholarshipRecords', records);
    });
  },

  didRender() {
    Ember.$('.menu .item').tab();
  },

  checkGradeIsWithinRange(grade){
    grade = Math.max(0,grade);
      grade = Math.min(100,grade);
      return grade;
  },

  actions: {
    saveStudent () {
      var updatedStudent = this.get('currentStudent');
      var res = this.get('store').peekRecord('residency', this.get('selectedResidency'));
      var gen = this.get('store').peekRecord('gender', this.get('selectedGender'));
      updatedStudent.set('DOB', new Date(this.get('selectedDate')));
      updatedStudent.set('resInfo', res);
      updatedStudent.set('genInfo', gen);
     
      // Saves the student
      updatedStudent.save();

      this.scholarshipRecords.forEach(obj => {
                  obj.save();
            });

     this.advanceStandingRecords.forEach(obj => {
                  obj.save();
            });
    },

    setCurrentAdvanceStanding(advancestanding){
      this.set('advanceStandingEditing',advancestanding);
    },

    editAdvanceStandingUnits(advanceStandingUnits){
       var updatedAdvanceStanding = this.get('advanceStandingEditing');
      updatedAdvanceStanding.set('units', advanceStandingUnits);
    },

    editAdvanceStandingGrade(advanceStandingGrade){
       var updatedAdvanceStanding = this.get('advanceStandingEditing');

       // Ensure grade is between 0-100
      advanceStandingGrade = this.checkGradeIsWithinRange(advanceStandingGrade);
      updatedAdvanceStanding.set('grade', advanceStandingGrade);
    },

    editAdvanceStandingFrom(advanceStandingFrom){
      var updatedAdvanceStanding = this.get('advanceStandingEditing');

      updatedAdvanceStanding.set('from', advanceStandingFrom);
    },

    editAdvanceStandingCourse(advanceStandingCourse){
      var updatedAdvanceStanding = this.get('advanceStandingEditing');
      updatedAdvanceStanding.set('course', advanceStandingCourse);
    },

    editAdvanceStandingDescription(advanceStandingDescription){
      var updatedAdvanceStanding = this.get('advanceStandingEditing');
      updatedAdvanceStanding.set('description', advanceStandingDescription);

    },

    setCurrentInputScholarship(scholarship){
      this.set('editingScholarship',scholarship);
    },

    editScholarshipID(newScholarshipID){
        var updatedScholarship = this.get('editingScholarship');
        updatedScholarship.set('scholarshipID',newScholarshipID);
        
    },

    editScholarshipNote(newScholarshipNote){
        var updatedScholarship = this.get('editingScholarship');
        updatedScholarship.set('note',newScholarshipNote);
    },

    editRegistrationComments(newRegistrationComments){
      var updatedStudentComments = this.get('currentStudent');
      updatedStudentComments.set('registrationComments', newRegistrationComments);
    },

    editBasisOfAdmission(newBasisOfAdmission){
       var updatedStudentComments = this.get('currentStudent');
      updatedStudentComments.set('basisOfAdmission', newBasisOfAdmission);
    },

    editAdmissionAverage(newAdmissionAverage){
      var updatedStudentComments = this.get('currentStudent');
      newAdmissionAverage = this.checkGradeIsWithinRange(newAdmissionAverage);

      updatedStudentComments.set('admissionAverage', newAdmissionAverage);
    },

    editAdmissionComments(newAdmissionComments){
      var updatedStudentComments = this.get('currentStudent');
      updatedStudentComments.set('admissionComments', newAdmissionComments);
    },


    createNewScholarship(){
      // We only save one way because the default serializer/adapter that we use wont give us a one-to-many JSON
      let scholarship = this.get('store').createRecord('scholarship', {
        scholarshipID: "Mock name for the scholarship",
        note: "Mock note for a scholarship",
        student: this.get('currentStudent'),
      });
      // Manually adds the new record to the one we're displaying'
      this.get('scholarshipRecords').pushObject(scholarship._internalModel);  
    },

    createNewAdvanceStanding(){
      // Need to create from the store because the model dosen't have a createRecord function'
      let advanceStanding = this.get('store').createRecord('advancestanding', {
        course: "Mock course name for advance standing",
        description: "Mock description for advance standing",
        units: 2,
        grade: 100,
        from: "Western University",
        student: this.get('currentStudent')
      });
      this.get('advanceStandingRecords').pushObject(advanceStanding._internalModel);
    },

    deleteScholarship(scholarship){
      // Delete from store, does not save
      scholarship.deleteRecord();
      // Removes the scholarship from the currently displaying records
      this.get('scholarshipRecords').removeObject(scholarship);
    },

    deleteAdvanceStanding(advanceStanding){
      // Delete from store,does not save
      advanceStanding.deleteRecord();
      // delete from current displaying records
      this.get('advanceStandingRecords').removeObject(advanceStanding);
    },

    firstStudent() {
      this.set('currentIndex', this.get('firstIndex'));
    },


    

    removeStudent(){
      var temp =  this.get('currentStudent');
       this.send('nextStudent');
      temp.destroyRecord();
     
      
    },
    
nextStudent() {
     if(this.get('RExist')===true){
      this.set('movingBackword' , false);
        if (this.get('currentIndex') < this.get('lastIndex')) {
        this.set('currentIndex', this.get('currentIndex') + 1);
            //     console.log(JSON.stringify(this.get('currentStudent')));
        }
        else {
         this.set('offset', this.get('offset') + this.get('pageSize'));
        }
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

    addStudent(){
       var myStore = this.get('store');
        var res = myStore.peekRecord('residency', this.get('selectedResidency'));
      var gen = myStore.peekRecord('gender', this.get('selectedGender'));
      var newThing = myStore.createRecord('student', {
         
              number: '0',
      firstName: 'New',
      lastName: 'User',
      DOB: new Date(this.get('selectedDate')),
      photo: '1',
      resInfo: res,
      genInfo: gen,
            

        });
      newThing.save();
    },

    allStudents() {
      this.set('showAllStudents', true);
    },

    selectGender (gender){
      this.set('selectedGender', gender);
      console.log(gender);
    },

    selectResidency (residency){
      this.set('selectedResidency', residency);
    },

    assignDate (date){
      this.set('selectedDate', date);
    },

    findStudent(){
      //disabled until fixed
       // this.set('showFindStudent', true); 
    },
  }
});
