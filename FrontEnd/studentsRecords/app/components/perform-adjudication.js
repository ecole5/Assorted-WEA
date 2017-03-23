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

      //Create record
         //Create the adjudication record
          var myStore = self.get('store');
          var myAdjudication = myStore.createRecord("adjudication", {
          date: new Date(),
          termAVG: null,
          unitPassed: null,
          unitTotal: null,
          note: null,
          program: null,
          plan: null,
          term: self.get('selectedTerm'),
          student: student,

  
      });

      self.set('result',myAdjudication);


        
          
        
        //Find all relevent grades
        var gradesStudent = student.get('grades');
        var termGrades = [];
        gradesStudent.forEach(function(grade){
          if (grade.get('term').get('id') === self.get('selectedTerm').get('id')){
                termGrades.push(grade); 
          }   
        }); //end of determaining term grade
        
        //Calculate load and YWA
        var load = 0;
        var total = 0;
         termGrades.forEach(function(grade){
          
            var temp = parseInt(grade.get('course').get('unit'));
             total = parseInt(grade.get('mark')) / temp;
             load = load + temp;
        
        });

        var ywa = total/load;
        //End of calculation of YWA


        

        //Determain level and plan
         if (termGrades[0]) {
         var program = termGrades[0].get('program');
         var level = program.get('level'); //should be same
          var plan = termGrades[0].get('plan'); //could be diffrent but we out of time

          
          myAdjudication.set('plan',plan);
          myAdjudication.set('program', 'program');
          myAdjudication.set('termAVG', ywa);
          myAdjudication.set('unitToal', total);
          myAdjudication.save();
        


          //Evaluate all the independent categories
          var category = [];
          category = plan.get('faculty').get('category');

          category.forEach(function(cat){
          var allRules= [];
          if (cat.get('independent')){

            //Get complete list of rules for category
           
            var catRules = [];
            catRules = cat.get('rules');
            catRules.forEach(function (rule){
             
              if (rule.get('type')){
                  allRules.push(rule);
                 
              }
              else if (rule.get('plan').get('id') === plan.get('id')){
                allRules.push(rule);
                
              }
              
            }); //End of getting complete list of rule from category

            var ruleFlag = 'test';
            allRules.forEach(function (rule){
              var exp = rule.get('log');
              var exp2 = exp.replace('AVG', ywa) ;
              var exp3 = exp2.replace ('LOAD',load);
              var exp4 = exp3.replace ('YEAR',level);
              
              if (!(eval(exp4)))
              {
                ruleFlag = rule;
              }
              
            });
            
              var commentsTotal = [];
               var catComments = [];
            //Get all the category comments
            if (ruleFlag === 'test' && cat.get('allRules')){
              
      
           
              catComments = cat.get('comment');

               catComments.forEach(function (comment){
                var actualComment = comment.get('comment');
                var newComment = myStore.createRecord("adjcomment", {
          comment: actualComment,
          adjudication: myAdjudication,
  
      });
      newComment.save();

            });

            }
            //Get all the category and rule commnents
            else if (ruleFlag !== 'test'){
           
              commentsTotal = ruleFlag.get('comment');
             
              catComments = cat.get('comment');
              

              catComments.forEach(function(comment){
                commentsTotal.push(comment);
              });
         

               commentsTotal.forEach(function (comment){
                var actualComment = comment.get('comment');
                var newComment = myStore.createRecord("adjcomment", {
          comment: actualComment,
          adjudication: myAdjudication,
  
      });
      newComment.save();

            });


            }
                
          }   //end of evaluating independents
          else{
            self.send('badAdjudication');
          }
          
        }); //end of independent loop
        

       

          


         }
         else{
          
            self.send('badAdjudication');
            
         }
    
         
          


  
  myAdjudication.save();
      }); //end of students loop
    },



    badAdjudication(){
      var mine = this.get('result');
      mine.set('note', 'could not complete');
      mine.save();
      console.log('bad');
    }




  },



});

