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
  RExist: true,  //RExist disables the next student button if the current student is null
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
    this.updateAdanceStanding();
  },

  updateAdanceStanding(){
    var self = this;
    this.get('store').query('advancestanding', {
      student: self.get('currentStudent').id
    }).then(function(records) {
        self.set('advanceStandingRecords', records);
    });
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
    try{
      this.set('currentStudent', this.get('studentsRecords').objectAt(index));
      this.set('studentPhoto', this.get('currentStudent').get('photo'));
      var date = this.get('currentStudent').get('DOB');
      var datestring = date.toISOString().substring(0, 10);
      this.set('selectedDate', datestring);
     // this.set('RExist',true);
    }
    catch(e){
      //this.set('RExist',false);
    }
  },

  didRender() {
    Ember.$('.menu .item').tab();
  },

  actions: {
    saveStudent () {
      var updatedStudent = this.get('currentStudent');
      var res = this.get('store').peekRecord('residency', this.get('selectedResidency'));
      var gen = this.get('store').peekRecord('gender', this.get('selectedGender'));
      updatedStudent.set('DOB', new Date(this.get('selectedDate')));
      updatedStudent.set('resInfo', res);
      updatedStudent.set('genInfo', gen);
      //updatedStudent.save().then(() => {
        //     this.set('isStudentFormEditing', false);

     
      // Saves the student
      updatedStudent.save().then(() => {     
      });

    },

    setCurrentAdvanceStanding(advancestanding){
      this.set('advanceStandingEditing',advancestanding);
    },

    editAdvanceStandingUnits(advanceStandingUnits){
       var updatedAdvanceStanding = this.get('advanceStandingEditing');
      updatedAdvanceStanding.set('units', advanceStandingUnits);

      updatedAdvanceStanding.save().then(() => {      
      });
    },

    editAdvanceStandingGrade(advanceStandingGrade){
       var updatedAdvanceStanding = this.get('advanceStandingEditing');

       if (advanceStandingGrade > 100){
         advanceStandingGrade = 100;
       } else if (advanceStandingGrade < 0){
         advanceStandingGrade = 0;
       }
      updatedAdvanceStanding.set('grade', advanceStandingGrade);

      updatedAdvanceStanding.save().then(() => {      
      });
    },

    editAdvanceStandingFrom(advanceStandingFrom){
      var updatedAdvanceStanding = this.get('advanceStandingEditing');

      updatedAdvanceStanding.set('from', advanceStandingFrom);

      updatedAdvanceStanding.save().then(() => {      
      });
    },

    editAdvanceStandingCourse(advanceStandingCourse){
      var updatedAdvanceStanding = this.get('advanceStandingEditing');
      updatedAdvanceStanding.set('course', advanceStandingCourse);

      updatedAdvanceStanding.save().then(() => {      
      });
    },

    editAdvanceStandingDescription(advanceStandingDescription){
      var updatedAdvanceStanding = this.get('advanceStandingEditing');
      updatedAdvanceStanding.set('description', advanceStandingDescription);

      updatedAdvanceStanding.save().then(() => {      
      });
    },

    setCurrentInputScholarship(scholarship){
      this.set('editingScholarship',scholarship);
    },

    editScholarshipID(newScholarshipID){
        var updatedScholarship = this.get('editingScholarship');
        updatedScholarship.set('scholarshipID',newScholarshipID);
          // Saves the scholarship
      updatedScholarship.save().then(() => {     
        //this.updateScholarships();      
      });
        
    },

    editScholarshipNote(newScholarshipNote){
        var updatedScholarship = this.get('editingScholarship');
        updatedScholarship.set('note',newScholarshipNote);
//alert("here");
        // Saves the scholarship
      updatedScholarship.save().then(() => {     
        //this.updateScholarships();      
      });
    },

    editRegistrationComments(newRegistrationComments){
      var updatedStudentComments = this.get('currentStudent');
      updatedStudentComments.set('registrationComments', newRegistrationComments);
      updatedStudentComments.save().then(() => {     
        //this.updateScholarships();      
      });
    },

    /*undoSave() {
      this.get('currentStudent').rollbackAttributes();

      this.get('store').findAll('residency').then(function (records) {
      self.set('residencyModel', records);
    });

       // load gender data model
    this.get('store').findAll('gender').then(function (records) {
      self.set('genderModel', records);
    });
   
    
  },
  */

    editBasisOfAdmission(newBasisOfAdmission){
       var updatedStudentComments = this.get('currentStudent');
      updatedStudentComments.set('basisOfAdmission', newBasisOfAdmission);
      updatedStudentComments.save().then(() => {     
        //this.updateScholarships();      
      });
    },

    editAdmissionAverage(newAdmissionAverage){
      var updatedStudentComments = this.get('currentStudent');
      if (newAdmissionAverage > 100){
        newAdmissionAverage = 100;
      } else if (newAdmissionAverage < 0){
        newAdmissionAverage = 0;
      }

      updatedStudentComments.set('admissionAverage', newAdmissionAverage);
      updatedStudentComments.save().then(() => {     
        //this.updateScholarships();      
      });
    },

    editAdmissionComments(newAdmissionComments){
      var updatedStudentComments = this.get('currentStudent');
      updatedStudentComments.set('admissionComments', newAdmissionComments);

      updatedStudentComments.save().then(() => {     
        //this.updateScholarships();      
      });
    },


    createNewScholarship(){
      // We only save one way because the default serializer/adapter that we use wont give us a one-to-many JSON
      let scholarship = this.get('store').createRecord('scholarship', {
        scholarshipID: "Mock name for the scholarship",
        note: "Mock note for a scholarship",
        student: this.get('currentStudent'),
      });

      // Saves the scholarship
      scholarship.save().then(() => {     
        this.updateScholarships();      
      });
    },

    createNewAdvanceStanding(){
      let advanceStanding = this.get('store').createRecord('advancestanding', {
        course: "Mock course name for advance standing",
        description: "Mock description for advance standing",
        units: 2,
        grade: 100,
        from: "Western University",
        student: this.get('currentStudent')
      });

      // Saves the scholarship
      advanceStanding.save().then(() => {     
        this.updateAdanceStanding();     
      });
    },

    deleteScholarship(scholarship){
      // Delete from store, and will automatically do everything else like sending delete request
      scholarship.destroyRecord();
    },

    deleteAdvanceStanding(advanceStanding){
      // Delete from store, and will automatically do everything else like sending delete request
      advanceStanding.destroyRecord();
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
       this.set('showFindStudent', true); 
    },
  }
});
