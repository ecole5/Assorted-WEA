import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  didInsertElement() {
    //    Ember.$('.tabular.menu .item').tab();
    Ember.$(document).ready(function () {
      Ember.$('.ui .item').on('click', function () {
        Ember.$('.ui .item').removeClass('active');
        Ember.$(this).addClass('active');
      });
    });
  },

  isHomeShowing: true,
  isStudentsRecordsDataEntry: false,
  isAboutShowing: false,
  isSettingsShowing: false,
  isHelpShowing: false,
  isUploading: false,
  isReporting: false,
  isAdjudication: false,

  newFile: {
    file: null,
    fileName: ''
  },

  actions: {
    home() {
      this.set('isHomeShowing', true);
      this.set('isStudentsRecordsDataEntry', false);
      this.set('isAboutShowing', false);
      this.set('isHelpShowing', false);
      this.set('isSettingsShowing', false);
      this.set('isUploading', false);
      this.set('isReporting', false);
      this.set('isAdjudication', false);

    },

    studentsDataEntry() {
      this.set('isHomeShowing', false);
      this.set('isStudentsRecordsDataEntry', true);
      this.set('isAboutShowing', false);
      this.set('isUploading', false);

      this.set('isHelpShowing', false);
      this.set('isSettingsShowing', false);
      this.set('isReporting', false);
      this.set('isAdjudication', false);
    },

    about() {
      this.set('isHomeShowing', false);
      this.set('isStudentsRecordsDataEntry', false);
      this.set('isAboutShowing', true);
      this.set('isHelpShowing', false);
      this.set('isSettingsShowing', false);
      this.set('isUploading', false);
      this.set('isReporting', false);
      this.set('isAdjudication', false);
    },

    help() {
      this.set('isHomeShowing', false);
      this.set('isStudentsRecordsDataEntry', false);
      this.set('isAboutShowing', false);
      this.set('isHelpShowing', true);
      this.set('isSettingsShowing', false);
      this.set('isUploading', false);
      this.set('isReporting', false);
      this.set('isAdjudication', false);
    },

    settings() {
      this.set('isHomeShowing', false);
      this.set('isStudentsRecordsDataEntry', false);
      this.set('isAboutShowing', false);
        this.set('isHelpShowing', false);
      this.set('isSettingsShowing', true);
      this.set('isUploading', false);
      this.set('isReporting', false);
      this.set('isAdjudication', false);
    },
    report() {
      this.set('isHomeShowing', false);
      this.set('isStudentsRecordsDataEntry', false);
      this.set('isAboutShowing', false);
      this.set('isHelpShowing', false);
      this.set('isSettingsShowing', false);
<<<<<<< HEAD
=======
      this.set('isUploading', false);
      this.set('isReporting', true);
      this.set('isAdjudication', false);
    },
    report() {
      this.set('isHomeShowing', false);
      this.set('isStudentsRecordsDataEntry', false);
      this.set('isAboutShowing', false);
      this.set('isHelpShowing', false);
      this.set('isSettingsShowing', false);
      this.set('isUploading', false);
>>>>>>> db2448d4db7cb8dd542c5ceb9028f351262b9640
      this.set('isReporting', true);
      this.set('isAdjudication', false);
    },
    adjudication() {
      this.set('isHomeShowing', false);
      this.set('isStudentsRecordsDataEntry', false);
      this.set('isAboutShowing', false);
      this.set('isHelpShowing', false);
      this.set('isSettingsShowing', false);
      this.set('isUploading', false);
      this.set('isReporting', false);
      this.set('isAdjudication', true);
    },
    submitUpload() {
      let uploadedFile = this.store.createRecord('upfile', this.get('newFile'));
      var file = document.getElementById('file-field').files[0];

      uploadedFile.set('file', file);
      uploadedFile.set('fileName', file.name);
      console.log(uploadedFile);

    }
  }
});
