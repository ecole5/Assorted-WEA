import Ember from 'ember';


export default Ember.Component.extend({

  store: Ember.inject.service(),
  categoryModel: null, //all documents in collection of type modelName
  notDONE: null, 


  actions: {


    editName(value) {
     
        var model = this.get('categoryModel');
        model.set('name', value);
        model.save();
    },

    selectStyle(value) {
      
      var model = this.get('categoryModel');
      if (value == "true"){
        model.set('allRules', true);
      }
      else{
         model.set('allRules', false);
      }
      
        model.save();
    },

      selectIndependent(value) {
      
      var model = this.get('categoryModel');
      if (value == "true"){
        model.set('independent', true);
      }
      else{
         model.set('independent', false);
      }
      
        model.save();
    },
   

   

  
    //finish editing and close the modal
    exit: function () {
      this.set('notDONE', false); 
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

