import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
//    Ember.$('.tabular.menu .item').tab();
    Ember.$(document).ready(function(){
      Ember.$('.ui .item').on('click', function() {
        Ember.$('.ui .item').removeClass('active');
        Ember.$(this).addClass('active');
      });
    });
  },





  isHomeShowing: true,
  isStudentsRecordsDataEntry: false,
  isAboutShowing: false,
  isSettingsShowing: false,

  //for help
  isHelpShowing: false,


  actions: {
    home () {
      this.set('isHomeShowing', true);
      this.set('isStudentsRecordsDataEntry', false);
      this.set('isAboutShowing', false);

      this.set('isHelpShowing', false);
     this.set('isSettingsShowing', false);

    },

    studentsDataEntry (){
      this.set('isHomeShowing', false);
      this.set('isStudentsRecordsDataEntry', true);
      this.set('isAboutShowing', false);

      this.set('isHelpShowing', false);
       this.set('isSettingsShowing', false);

    },

    about (){
      this.set('isHomeShowing', false);
      this.set('isStudentsRecordsDataEntry', false);
      this.set('isAboutShowing', true);

      this.set('isHelpShowing', false);
    },

    help (){
      this.set('isHomeShowing', false);
      this.set('isStudentsRecordsDataEntry', false);
      this.set('isAboutShowing', false);
      this.set('isHelpShowing', true);

       this.set('isSettingsShowing', false);
    },

      settings (){
      this.set('isHomeShowing', false);
      this.set('isStudentsRecordsDataEntry', false);
      this.set('isAboutShowing', false);
        this.set('isSettingsShowing', true);

    }
  }
});
