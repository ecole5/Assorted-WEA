import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  didInsertElement() {
//    Ember.$('.tabular.menu .item').tab();
    Ember.$(document).ready(function(){
      Ember.$('.ui .item').on('click', function() {
        Ember.$('.ui .item').removeClass('active');
        Ember.$(this).addClass('active');
      });
    });
  },
  storedElements: [],
  isHomeShowing: true,
  isStudentsRecordsDataEntry: false,
  isAboutShowing: false,
  isSettingsShowing: false,
  isHelpShowing: false,
  isUploading: false,
  newFile:{
    file: null,
    fileName: ''
  },

  actions: {
    home () {
      this.set('isHomeShowing', true);
      this.set('isStudentsRecordsDataEntry', false);
      this.set('isAboutShowing', false);
      this.set('isHelpShowing', false);
      this.set('isSettingsShowing', false);
this.set('isUploading', false);
    },

    studentsDataEntry (){
      this.set('isHomeShowing', false);
      this.set('isStudentsRecordsDataEntry', true);
      this.set('isAboutShowing', false);
this.set('isUploading', false);

      this.set('isHelpShowing', false);
       this.set('isSettingsShowing', false);

    },

    about (){
      this.set('isHomeShowing', false);
      this.set('isStudentsRecordsDataEntry', false);
      this.set('isAboutShowing', true);
      this.set('isHelpShowing', false);
         this.set('isSettingsShowing', false);
         this.set('isUploading', false);

    },

    help (){
      this.set('isHomeShowing', false);
      this.set('isStudentsRecordsDataEntry', false);
      this.set('isAboutShowing', false);
      this.set('isHelpShowing', true);
      this.set('isSettingsShowing', false);
      this.set('isUploading', false);

    },

      settings (){
      this.set('isHomeShowing', false);
      this.set('isStudentsRecordsDataEntry', false);
      this.set('isAboutShowing', false);
      this.set('isSettingsShowing', true);
this.set('isUploading', false);
    },
    uploadFile(){
            this.set('isHomeShowing', false);
      this.set('isStudentsRecordsDataEntry', false);
      this.set('isAboutShowing', false);
      this.set('isHelpShowing', false);
      this.set('isSettingsShowing', false);
      this.set('isUploading', true);
    },
    checkFileValidity(name){
      var existing_data = [];
      if (existing_data.length === 0){
       if(name === "student.xslx"){
         return false;}
        else {
          existing_data.push(name);
          return true;
        }
      }
      else if(existing_data.includes("student.xslx")){
        existing_data.push(name);
        return true;
      }

    },
    submitUpload(){
      var file = document.getElementById('file-field').files[0];
      console.log(file.name);
      if (file.name == "students.xlsx"&& this.storedElements.length ===0){
        alert("Successful!")
        this.storedElements.push(file.name);
       // let uploadedFile = this.store.createRecord('upfile',this.get('newFile'));
        //uploadedFile.set('file', file);
        //uploadedFile.set('fileName',file.name);
        //console.log(uploadedFile);
      }
      else if(this.storedElements.includes(file.name)){
        alert("Duplicate File Upload");
      }
      else if(file.name != "students.xlsx"&& this.storedElements.length ===0){
        alert("Upload Student file first!");
      }
      else if(file.name.includes(".xslx") === false){
        alert("Wrong File Type Error!")
      }
      else if(this.storedElements.includes("student.xlsx")){
        alert("Successful!");
        this.storedElements.push(file.name);
        //let uploadedFile = this.store.createRecord('upfile',this.get('newFile'));
        //uploadedFile.set('file', file);
        //uploadedFile.set('fileName',file.name);
        //console.log(uploadedFile);
      }
      else{
        alert("General error please follow instructions.");
      }
    },
  }
});