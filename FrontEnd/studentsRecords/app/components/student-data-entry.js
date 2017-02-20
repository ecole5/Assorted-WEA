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
  RExist: true,
  advanceStandingRecords: null,
  advanceStandingEditing: null,
  recordsToDelete: null,



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
      var avg = this.get('admissionAverage');
      var adminComments = this.get('admissionComments');
      var basisOfAdmin = this.get('basisOfAdmission');
      var regComments = this.get('registrationComments');
      if (avg != -1){
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

      let hsgrade = this.get('store').createRecord('hsgrade', {
          mark:100,
          source: null, // this mean hscourse
      });

      // might be able to remove
      //hsgrade.save();

       let secondaryschool = this.get('store').createRecord('secondaryschool', {
         name: "This is default text for name",
         courses: null,
      });

      // might be able to remove
      //secondaryschool.save();

       let hscourse = this.get('store').createRecord('hscourse', {
          level:"This is a default level",
          source: "This is a default source",
          unit: "This is a default unit",
          subject: hssubject,
          school: secondaryschool,
          grades: hsgrade,
      });

      hscourse.save();
      secondaryschool.set('courses',hscourse);
      secondaryschool.save();
      hsgrade.set('courses',hscourse);
      hsgrade.save();

      let hssubject = this.get('store').createRecord('hssubject', {
          name:"This is a default subject name",
          description: "This is a default description",
          courses: hscourse,
      });

      hssubject.save();

      let plan = this.get('store').createRecord('plan', {
          name: "This is a default name for the plan",
      });

      plan.save();

      let term = this.get('store').createRecord('term', {
          name: "This is default text for a name",
      });

      term.save();

      let uniCourse = this.get('store').createRecord('course', {
          courseLetter: "This is default text for courseLetter",
          courseNumber: "This is default text for courseNumber",
          name: "This is default text for course name",
          unit: "This is default text for unit",
      });

      let program = this.get('store').createRecord('program', {
          name: "This is a default name for the program",
          level: 100,
          load: "This is a default load for the program",
          status: "This is a default status for the program",
          term:term,
          plan:plan,
      });

       let grade = this.get('store').createRecord('grade', {
          mark:0,
          note: "This is a default note",
          student: this.get('currentStudent'),
          program: program,
          course: uniCourse,
      });

      grade.save();
     
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
