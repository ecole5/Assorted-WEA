import Ember from 'ember';

export default Ember.Component.extend({


    showGender: false,
    showResidency: false,
    showSecondary: false,
    showHsCourses: false,
    showHsSubjects: false,
    showcourseCode: false,
    showPlanCode: false,
    showTermCode: false,
    showFaculty: false,
    showProgram: false,



    store: Ember.inject.service(),

    init() {
        this._super(...arguments);
    },

    actions: {

        showGender() { //this deals with the problem 
            this.set('showGender', true);
        },

         showProgram() { //this deals with the problem 
            this.set('showProgram', true);
        },


        showResidency() { //this deals with the problem 
            this.set('showResidency', true);
        },
        
        showSecondary() { //this deals with the problem 
            this.set('showSecondary', true);
        },
          showHsCourses() { //this deals with the problem 
            this.set('showHsCourses', true);
        },
         showHsSubjects() { //this deals with the problem 
            this.set('showHsSubjects', true);
        },
           showCourseCode() { //this deals with the problem 
            this.set('showCourseCode', true);
        },
         showPlanCode() { //this deals with the problem 
            this.set('showPlanCode', true);
        },
         showTermCode() { //this deals with the problem 
            this.set('showTermCode', true);
        },

        showFaculty(){
             this.set('showFaculty', true);
        },
         showProgramAdmin(){
             this.set('showProgramAdmin', true);
        }
        


    }


});

