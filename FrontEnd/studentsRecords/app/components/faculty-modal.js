import Ember from 'ember';

export default Ember.Component.extend({

  store: Ember.inject.service(),
  notDONE: null, //tied to the appropriate show boolean in select-code
  programAdminModel: null,
  codeModel: null,
  currentModel: null,


  init() {
    this._super(...arguments);
    // get all documents of type modelName

    var self = this;
    this.get('store').findAll('programadmin').then(function (records) {
      self.set('programAdminModel', records);
    });
   

    this.get('store').findAll('faculty').then(function (records) {
      self.set('codeModel', records);

    });

  },



  actions: {

    //Removes a code option
    removeCode(item) {
      item.destroyRecord();
    },

    selectFaculty(value) {
        var model = this.get('currentModel');
        var faculty = this.get('store').peekRecord('faculty', value);
        model.set('faculty', faculty);
        model.save();
    },


    editName(value) {
      var model = this.get('currentModel');
      model.set('name', value);
      model.save();
    },

 
    setCurrentModel(model) {
      var interval = 50;
      Ember.run.later(this, function () {
        this.set('currentModel', model);
      }, interval);

    },

    //Create new document
    newCode() {
      var myStore = this.get('store');
      var newCode = myStore.createRecord("plan", {
        name: "NEW NAME",
        faculty: null,
     
      });
      newCode.save();

    },

    //finish editing and close the modal
    exit: function () {
      this.set('notDONE', false); //component control in select-code
      Ember.$('.ui.modal').modal('hide');
      Ember.$('.ui.modal').remove(); //fixes layering problem

    },
  },

  didRender() { //run on startup
    Ember.$('.ui.modal')
      .modal({
        closable: false, //cant click out 
      })
      .modal('show');
    
  },
});

