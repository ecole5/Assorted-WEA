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
  admissionAverage: -1,
  admissionComments: null,
  editingScholarship: null,
  RExist: true,  //RExist disables the next student button if the current student is null
  advanceStandingRecords: null,
  advanceStandingEditing: null,
  recordsToDelete: null,
  selctedInfoThatNeedsChanging: {},
  selectedSecondarySchoolMap: {},
  selectedHighSchoolSubjectMap: {},
  selectedUniversityCoursesMap: {},
  selectedPlanCodeMap: {},
  selectedTermCodeMap: {},
  gradeRecords: null,
  hsGradeRecords: null,
  highSchoolCoursesRecords: null,
  higschoolSubjectsRecords: null,
  secondarySchoolRecords: null,
  universityCoursesRecords: null,
  universityPlanCodesRecords: null,
  universityTermCodeRecords: null,
  universityProgramRecords: null,
  gradesToCheck: [],
  hsGradesToCheck: [],
  currentlySelectedProgramItem: null,
  jumpingRecords: false,

  // Ouda Auth stuff for student data entry
  SDE01IsPermitted: Ember.computed(function(){ //Manage system roles
    var authentication = this.get('oudaAuth');
    if (authentication.getName === "Root") {
      return true;
    } else {
      return (authentication.get('userCList').indexOf("SDE01") >= 0);
    }
  }),


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
      } else if(self.get('jumpingRecords')){
        //don't change currentIndex, currentIndex is changed in the function that changed offset
          //manually trigger observable
        //self.notifyPropertyChange('currentIndex');
          //manually effect observable
        self.showStudentData(self.get('currentIndex'));
        self.set('jumpingRecords',false);
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

    // load all the models needed for dropdowns
    this.updateHighSchoolCourses();
    this.updateSecondarySchools();
    this.updatehighSchoolSubjects();
    this.updateUniversityCourses();
    this.updatePlanCodes();
    this.updateTermCodes();
    this.updateProgramCodes();
    

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
    
    this.revertChangesFromPreviousStudent();

    this.fetchStudentInformation();
  },

  revertChangesFromPreviousStudent(){
     // Prevent users from creating data while looking at a student, then saving it while looking at a different student
     if (this.get('advanceStandingRecords') != null){
       this.get('advanceStandingRecords').forEach(function(model) {
           model.rollbackAttributes();
       });
     }
     
     if (this.get('scholarshipRecords') != null){
       this.get('scholarshipRecords').forEach(function(model) {
         model.rollbackAttributes();
       });
     }

     this.get('store').peekAll('program').forEach(obj => {
                  obj.rollbackAttributes();
            });

            this.get('store').peekAll('course').forEach(obj => {
                  obj.rollbackAttributes();
            });


     this.get('store').peekAll('hscourse').forEach(obj => {
                  obj.rollbackAttributes();
            });

            this.get('store').peekAll('secondaryschool').forEach(obj => {
                  obj.rollbackAttributes();
            });

       this.get('store').peekAll('hsgrade').forEach(obj => {
                  obj.rollbackAttributes();
            });

     this.clearSelectedMaps();
  },

  fetchStudentInformation(){
    this.updateScholarships();
    this.fetchAdanceStanding();
    this.updateUniGrades();
    this.updateHSGrades();
  },

  clearSelectedMaps(){
     // To determine if a student needs the following information updated, I check if it's empty or not'
     // I set it to empty here so that things changed in previous students dont effect others
      this.selectedHighSchoolCoursesMap =   {};
      this.selectedSecondarySchoolMap=   {};
      this.selectedHighSchoolSubjectMap = {};
      this.selectedUniversityCoursesMap = {};
      this.selectedPlanCodeMap = {};
      this.selectedTermCodeMap = {};
  },

  fetchAdanceStanding(){
    var self = this;
    this.get('store').query('advancestanding', {
      student: self.get('currentStudent').id
    }).then(function(records) {
        self.set('advanceStandingRecords', records);
    });
  },

  // Gets the scholarships for currentStudent and saves them to scholarshipRecords
  updateScholarships(){
    var self = this;
    this.get('store').query('scholarship', {
      student: self.get('currentStudent').id
    }).then(function(records) {
        self.set('scholarshipRecords', records);
    });

  },

  updateUniGrades(){
    var self = this;
    this.get('store').query('grade', {
      student: self.get('currentStudent').id
    }).then(function(records) {
        self.set('gradeRecords', records);
    });
  },

  updateHSGrades(){
    var self = this;
    this.get('store').query('hsgrade', {
      student: self.get('currentStudent').id
    }).then(function(records) {
        self.set('hsGradeRecords', records);
    });
  },

  updateHighSchoolCourses(){
    var self = this;
    this.get('store').findAll('hscourse').then(function(records) {
        self.set('highSchoolCoursesRecords', records);
    });
  }, 
  
  updateProgramCodes(){
    var self = this;
    this.get('store').findAll('program').then(function(records) {
        self.set('universityProgramRecords', records);
    });
  },

  updateSecondarySchools(){
    var self = this;
    this.get('store').findAll('secondaryschool').then(function(records) {
        self.set('secondarySchoolRecords', records);
    });
  },

  updatehighSchoolSubjects(){
    var self = this;
    this.get('store').findAll('hssubject').then(function(records) {
        self.set('higschoolSubjectsRecords', records);
    });
  },

  updateUniversityCourses(){
    var self = this;
    this.get('store').findAll('course').then(function(records) {
        self.set('universityCoursesRecords', records);
    });
  },

  updatePlanCodes(){
    var self = this;
    this.get('store').findAll('plan').then(function(records) {
        self.set('universityPlanCodesRecords', records);
    });
  },
  
  updateTermCodes(){
    var self = this;
    this.get('store').findAll('term').then(function(records) {
        self.set('universityTermCodeRecords', records);
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
      if (this.get('selectedResidency')){
        var res = this.get('store').peekRecord('residency', this.get('selectedResidency'));
           updatedStudent.set('resInfo', res);
      }
      if (this.get('selectedGender')){
          var gen = this.get('store').peekRecord('gender', this.get('selectedGender'));
           updatedStudent.set('genInfo', gen);
      }
      
    
      updatedStudent.set('DOB', new Date(this.get('selectedDate')));
   
     
      var avg = this.get('admissionAverage');
      var adminComments = this.get('admissionComments');
      var basisOfAdmin = this.get('basisOfAdmission');
      var regComments = this.get('registrationComments');
      if (avg !== -1){
        updatedStudent.set('admissionAverage',avg);
      }
      if (adminComments != null){
        updatedStudent.set('admissionComments',adminComments);
      }
      if (basisOfAdmin != null){
        updatedStudent.set('basisOfAdmission',basisOfAdmin);
      }
      if (regComments != null){
        updatedStudent.set('registrationComments',regComments);
      }


      // Saves the student
      updatedStudent.save();

      this.get('store').peekAll('scholarship').forEach(obj => {
        // should probably add check to see if its dirty before saving, but ember dosent work nicely
        // the method/property ember gives you isnt altways true and you may need to manually set it dirrty etc.
                
                  obj.save();
            });

     this.get('store').peekAll('advancestanding').forEach(obj => {
                  obj.save();
            });

    this.get('store').peekAll('grade').forEach(obj => {
                  obj.save();
            });


             this.get('store').peekAll('hsgrade').forEach(obj => {
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

    editProgramName(programNameText){
      var updatedProgram = this.get('currentlySelectedProgramItem');
      updatedProgram.set('name', programNameText);
    },

    editProgramLevel(programNameText){
      var updatedProgram = this.get('currentlySelectedProgramItem');
      updatedProgram.set('level', programNameText);
    },

    editProgramLoad(programNameText){
      var updatedProgram = this.get('currentlySelectedProgramItem');
      updatedProgram.set('load', programNameText);
    },

    editProgramStatus(programNameText){
      var updatedProgram = this.get('currentlySelectedProgramItem');
      updatedProgram.set('status', programNameText);
    },

    editHSGradeMark(programNameText){
      var updatedProgram = this.get('currentlySelectedProgramItem');
      updatedProgram.set('mark', programNameText);
    },

    editGradeMark(programNameText){
      var updatedProgram = this.get('currentlySelectedProgramItem');
      updatedProgram.set('mark', programNameText);
    },

    editGradeNote(programNameText){
      var updatedProgram = this.get('currentlySelectedProgramItem');
      updatedProgram.set('note', programNameText);
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
      this.set('registrationComments', newRegistrationComments);
    },

    editBasisOfAdmission(newBasisOfAdmission){
      this.set('basisOfAdmission', newBasisOfAdmission);
    },

    editAdmissionAverage(newAdmissionAverage){
      newAdmissionAverage = this.checkGradeIsWithinRange(newAdmissionAverage);
      this.set('admissionAverage', newAdmissionAverage);
    },

    editAdmissionComments(newAdmissionComments){
      this.set('admissionComments', newAdmissionComments);
    },


    createNewScholarship(){
      // We only save one way because the default serializer/adapter that we use wont give us a one-to-many JSON
      let scholarship = this.get('store').createRecord('scholarship', {
        scholarshipID: "Mock name for the scholarship",
        note: "Mock note for a scholarship",
        student: this.get('currentStudent'),
      });
      // Manually adds the new record to the ones we're displaying'
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
      //  Manually adds the new record to the ones we're displaying'
      this.get('advanceStandingRecords').pushObject(advanceStanding._internalModel);
    },

    deleteScholarship(scholarship){
      // Delete from store, does not save
      scholarship.deleteRecord();
      // Removes the scholarship from the currently displaying records
      this.get('scholarshipRecords').removeObject(scholarship);
    },

    deleteGrade(grade){
      grade.deleteRecord();
      this.get('gradeRecords').removeObject(grade);
    },

    deleteAdvanceStanding(advanceStanding){
      // Delete from store,does not save
      advanceStanding.deleteRecord();
      // delete from current displaying records
      this.get('advanceStandingRecords').removeObject(advanceStanding);
    },

    deleteHSGrade(grade){
      // Delete from store,does not save
      grade.deleteRecord();
      
      // delete from current displaying records
      this.get('hsGradeRecords').removeObject(grade);
    },

    firstStudent() {
      this.set('currentIndex', this.get('firstIndex'));
    },

     createNewGradeForUni(){
       //alert("clicked");
      let uniGrade = this.get('store').createRecord('grade', {
          mark: "Default Mark",
          note: "Default note",
          program: null,
          student: this.get('currentStudent'),
          course: null,
          term: null,
          plan: null,
      });
    
    this.gradeRecords.pushObject(uniGrade._internalModel);
    },
    
    createNewGradeForHS(){
      let hsGrade = this.get('store').createRecord('hsgrade', {
          mark: 100,
          student: this.get('currentStudent'),
          source: null,
      });

    this.hsGradeRecords.pushObject(hsGrade._internalModel);
    //this.checkHSGradeForCourse(hsGrade);
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

//move student view to the new student
//this is done by loading all the student records

        var self=this;
        this.get('store').query('student',{
            student:true,
            len:true
          }
        ).then(function (records){
//  getting the length of the array
          var length = records.indexOf(records.get("lastObject"));
          var quotientTimes10 = Math.floor(length/10) * 10;
          var remainder = length % 10;
//  and moving to the last object in that array
          self.set('jumpingRecords',true);
          self.set('offset',quotientTimes10);
          self.set('currentIndex',remainder);



        });     
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

    selectedProgramTerm (model){
      // I can't save directly from the iterating model, I need to find the associated model in the store'
      var foundRecord = this.get('store').peekRecord('term', model);
      this.get('currentlySelectedProgramItem').set('term',foundRecord);
    },

    selectedProgramCourses (model){
      // I can't save directly from the iterating model, I need to find the associated model in the store'
      var foundCourse = this.get('store').peekRecord('hscourse', model);
     
        this.get('currentlySelectedProgramItem').set('source',foundCourse);
    },

    selectedSecondarySchool (model){
      // grabs the associated program from the id that I got from the other function
      var foundCourse = this.get('store').peekRecord('hscourse', this.get('currentlySelectedProgramItem'));
      // I can't save directly from the iterating model, I need to find the associated model in the store'
      var foundSchool = this.get('store').peekRecord('secondaryschool', model);
      foundCourse.set('school',foundSchool);
      foundCourse.save();
    },   

    selectedGradeCourse (model){
      //var foundProgram = this.get('store').peekRecord('grade', this.get('currentlySelectedProgramItem'));
      // I can't save directly from the iterating model, I need to find the associated model in the store'
      var foundRecord = this.get('store').peekRecord('course', model);
      this.get('currentlySelectedProgramItem').set('course',foundRecord);
    },

    selectedProgram (model){
      // I can't save directly from the iterating model, I need to find the associated model in the store'
      var foundRecord = this.get('store').peekRecord('program', model);
      this.get('currentlySelectedProgramItem').set('program',foundRecord);
    },

    selectedProgramPlan (model){
      // same as selected progra term
      var foundRecord = this.get('store').peekRecord('plan', model);
      this.get('currentlySelectedProgramItem').set('plan',foundRecord);
    },

    currentlySelectedProgram(item){
      this.set('currentlySelectedProgramItem', item);
    },

    assignDate (date){
      this.set('selectedDate', date);
    },

    findStudent(){
      this.set('jumpingRecords',true);
       this.set('showFindStudent', true); 
    },

    undoSave(){
      this.showStudentData(this.get('currentIndex'));
    },

  }
});
