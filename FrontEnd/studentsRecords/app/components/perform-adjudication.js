import Ember from 'ember';


export default Ember.Component.extend({

  store: Ember.inject.service(),

  studentModel: null,
  courseModel: null,
  gradeModel: null,
  termModel: null,
  programModel: null,
  planModel: null,
  commentModel: null,
  adjcommentModel: null,
  catcommentModel: null,
  ruleModel: null,
  categoryModel: null,
  facultyMode: null,


  processing: false,
  selectedTerm: null,
  result: null,


  init() {
    this._super(...arguments);

    var self = this;

    this.get('store').findAll('term').then(function (records) {
      self.set('termModel', records);

    

    });

  },






  actions: {

    setCurrentTerm(value) {
      var term = this.get('store').peekRecord('term', value);
      this.set('selectedTerm', term);


    },
    go() {
      this.set('processing', true);
      var self = this;

      this.get('store').findAll('category').then(function (records) {
        self.set('categoryModel', records);
        self.get('store').findAll('faculty').then(function (records) {
            self.set('facultyModel', records);
        self.get('store').findAll('grade').then(function (records) {
          self.set('gradeModel', records);
          self.get('store').findAll('comment').then(function (records) {
            self.set('commentModel', records);
            self.get('store').findAll('catcomment').then(function (records) {
              self.set('catcommentModel', records);
              self.get('store').query('student', {
                all: 'true',
              }).then(function (records) {
                self.set('studentModel', records);
              
                self.get('store').findAll('plan').then(function (records) {
                  self.set('planModel', records);
                  self.get('store').findAll('course').then(function (records) {
                    self.set('courseModel', records);
                    self.get('store').findAll('program').then(function (records) {
                      self.set('programModel', records);

                      self.get('store').findAll('rule').then(function (records) {
                        self.set('ruleModel', records);
                        self.get('store').findAll('rulecomment').then(function (records) {
                          self.set('rulecommentModel', records);
                            self.send('startLoop');
                        });

                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
      });


















    },

    startLoop() {
      
    

      var student = this.get('studentModel');
      var self = this;
      

      //find a student
      student.forEach(function(student) {
          
        
        //Find all relevent grades
        var gradesStudent = student.get('grades');
        var termGrades = [];
        gradesStudent.forEach(function(grade){
          if (grade.get('term').get('id') == self.get('selectedTerm').get('id')){
                termGrades.push(grade); 
          }   
        }); //end of determaining term grade
        
        //Calculate load and YWA
        var load = 0;
        var total = 0
         termGrades.forEach(function(grade){
          
            var temp = parseInt(grade.get('course').get('unit'));
             total = parseInt(grade.get('mark')) / temp;
             load = load + temp;
        
        });

        var ywa = total/load;
        //End of calculation of YWA

        //Determain level and plan
         if (termGrades[0]) {
         var level = termGrades[0].get('program').get('level'); //should be same
          var plan = termGrades[0].get('plan'); //could be diffrent but we out of time

          //Evaluate all the independent categories
          var category = [];
          category = plan.get('faculty').get('category');

          category.forEach(function(cat){
          allRules= [];
          if (cat.get('independent')){

            //Get complete list of rules for category
            var tempRules = [];
            tempRules = cat.get('rules');
            var allRules = [];
            
            
            catRules.forEach(function (rule){
             
              if (rule.get('plan') == null){
                  allRules.push(rule);
                  console.log('general');
              }
              else if (rule.get('plan').get('id') == plan.get('id')){
                allRules.push(rule);
                console.log('specii')
              }
              
            }); //End of getting complete list of rule from category

            console.log(allRules);
                
          }   
          
        }); //end of evaluating independents
        

       

          


         }
         else{
            self.set('result', "Adjudicaiton failed");
            self.send('createAdjudication');
            
         }
    
         
          


  

      }); //end of students loop
    },

    newGrade(){
          
    var prg = this.get('store').peekRecord('program', '58d3015e3a3a5639c8166547');
    var plan = this.get('store').peekRecord('plan', '58d301fc3a3a5639c8166549');
    var term = this.get('store').peekRecord('term', '58d2f7530456bb17600c3c6c');
    var course = this.get('store').peekRecord('course', '58d300d43a3a5639c8166545');
    var student = this.get('store').peekRecord('student', '585df32e0bf2ba5ea6951587');
      var myStore = this.get('store');
      var newCode = myStore.createRecord("grade", {
        mark: "53",
        note: "Poor job",
        program: prg,
        plan: plan,
        term: term,
        course: course,
        student: student,

      });
      newCode.save();

    },

    createAdjudication(){
         console.log(this.get('result'));
    }




  },



});

