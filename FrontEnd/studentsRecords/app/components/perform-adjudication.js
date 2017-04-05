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

  adjModel: null,



  processing: false,
 complete: false,
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
      this.set('complete', false);
      var self = this;

      this.get('store').findAll('category').then(function (records) {
        self.set('categoryModel', records);
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
    

    },

    startLoop() {



      var students = this.get('studentModel');
      var self = this;

      //find a student
      for (var i = 0; i < students.get('length'); i++) {

        //Set a reference to the current student 
        var student = students.objectAt(i);

        //Find all relevent grades in that semester
        var gradesStudent = student.get('grades');
        var termGrades = [];
        gradesStudent.forEach(function (grade) {
          if (grade.get('term').get('id') === self.get('selectedTerm').get('id')) {
            termGrades.push(grade);
          }
        }); //end of determaining term grade

        //Check that enroledd in semester before continuing
        if (termGrades.length === 0) {
          console.log("student not in semester");
          continue; //stop before evaluating the sutdent anymore
        }


        //Calculate load and YWA
        var load = 0;
        var total = 0;
        var passed = 0;
        termGrades.forEach(function (grade) {
          var temp = parseInt(grade.get('course').get('unit'));
          var temp2 = parseInt(grade.get('mark'));
          if (temp2 > 50) {
            console.log("passed grade");
            passed = passed + temp;
          }
          total = temp2 / temp;
          load = load + temp;

        });

        console.log(passed);
        var ywa = total / load;


        //Determain level and plan
        var program = termGrades[0].get('program');
        var level = program.get('level'); //should be same
        var plan = termGrades[0].get('plan'); //could be diffrent but we out of time


        //Create the adjudication, comments will be created latter
        var myStore = self.get('store');
        var myAdjudication = myStore.createRecord("adjudication", {
          date: new Date(),
          termAVG: ywa.toString(),
          unitPassed: passed,
          unitTotal: load.toString(),
          note: "This is a sample note",
          program: self.get('store').peekRecord('program', program.get('id')),
          plan: self.get('store').peekRecord('plan', plan.get('id')),
          term: self.get('selectedTerm'),
          student: self.get('store').peekRecord('student', student.get('id')),

        });

        myAdjudication.save();


        //Evaluate all the independent categories
        var category = [];
        category = plan.get('faculty').get('category');

        var foundOne = false; //will be true when one of the none independent categories is satisfied



        for (i = 0; i < category.get('length'); i++) {

          var cat = category.objectAt(i);
          var independentType = cat.get('independent'); //true if independent

          //Wont evaluate if another none independent category has been meet
          if (foundOne && !independentType) {
            continue;
          }

          //Get complete list of rules for the category plan combo
          var allRules = [];

           cat.get('rules').forEach(function (rule) {

            if (rule.get('type')) { //category specific rules
              allRules.push(rule);

            }
            else if (rule.get('plan').get('id') === plan.get('id')) { //plan specific rules
              allRules.push(rule);

            }

          }); 


          //Check each rule and see if they satisfy ture
          var allRuleSatisfied = true;
          var oneRuleSatisfied = false;
          allRules.forEach(function (rule) {
            var exp = rule.get('log');
            var exp2 = exp.replace('AVG', ywa);
            var exp3 = exp2.replace('LOAD', load);
            var exp4 = exp3.replace('YEAR', level);


            if (!(eval(exp4))) {
             allRuleSatisfied = false;
            }
            else {
              oneRuleSatisfied = rule;
            }

          });


          //Evaluate category satisfactory based on type and number of rules satisifed          
          if (cat.get('allRules') && allRuleSatisfied) { //all rules must be true, and they are all true
            console.log("All rules were true"); //get comment codes just for that specific rule

            //Dont run for other none independent 
            if (!independentType){
              foundOne = true;
            }

          }

        
          else if(!cat.get('allRules') && oneRuleSatisfied)  {  //just one rules needed and one rules true
            console.log("Some of the rules were true"); //Get comment codes for both category and speicifc rule

              //Dont run for other none independent 
              if (!independentType){
              foundOne = true;
            }

          
          }
         



        } //end of looping through cats 

      }//end of student loop
    
  
      self.get('store').findAll('adjudication').then(function (records) {
        self.set('adjModel', records);
        self.set("processing", false);
        self.set("complete", true);
      });
  }, //end of entire action loop
  



  }//end of action

});

