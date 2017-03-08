import Ember from 'ember';

/*This is a general edit code modal. It deals with modals that just have one property name. 
It is reusable. You can add, edit and delete codes from this panel. Data is feed in through select-code
where these components have outlets*/

export default Ember.Component.extend({

  store: Ember.inject.service(),
  codeModel: null, //all documents in collection of type modelName
  currentModel: null, //current document in collection
  notDONE: null, //tied to the appropriate show boolean in select-code
  title: null, //title of page, feed in through outlet in select-code
  modelName: null, //name of model, feed in through outlet in select-code


  init() {
    this._super(...arguments);
    // get all documents of type modelName
    var self = this;
    this.get('store').findAll(this.get('modelName')).then(function (records) {
      self.set('codeModel', records);
    });
  },


  actions: {

    //Removes a code option
    removeCode(item) {
      item.destroyRecord();
    },

    //edit a code option (sometimes we have a race condition, where model is null and thus it wont set)
    editCode(value) {
      var current = this.get('currentModel');
      
      if (!value){
         value = "NEW NAME";
         alert("Name can not be empty!");
      }
        
        current.set('name', value);
        current.save();
    },

    //Set context of what is being currently edited
    setCurrentModel(model) {
          var interval = 50;
      Ember.run.later(this, function () {
        this.set('currentModel', model);
      }, interval);
    },

    //Create new document
    newCode() {
      var myStore = this.get('store');
      var newCode = myStore.createRecord(this.get('modelName'), {
        name: 'NEW NAME'
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

