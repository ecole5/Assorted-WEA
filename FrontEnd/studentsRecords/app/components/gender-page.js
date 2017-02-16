import Ember from 'ember';

export default Ember.Component.extend({

  store: Ember.inject.service(),
 

    GenderModel: null, 
    currentModel: null,

  notDONE: null,

  init() {
    this._super(...arguments);
    

       // load gender data model
        this.set('GenderModel', this.get('store').findAll('gender'));
 },


  actions: {
       removeItem(item) {
            item.destroyRecord();

            
        },
           editItem(value) {
              var updatedItem = this.get('currentModel');
       
        
            var temp;
            if (!value){
                temp = "NULL";
                
            }
            else{
                temp = value;
            }
      
         updatedItem.set('name',temp);
         updatedItem.save();
        },
        
         setCurrentModel(model) { //this deals with the problem 
            this.set('currentModel',model);
        },
         addNewGender() {
            var myStore = this.get('store');
            var newThing = myStore.createRecord('gender', {
                name: 'Edit Me'
            });
            newThing.save();
            
        },

  

    exit: function () {
      this.set('notDONE', false);
      Ember.$('.ui.modal').modal('hide');
      Ember.$('.ui.modal').remove();
    }
  },


  didRender() {
    console.log("created");  
      Ember.$('.ui.modal')
        .modal({
          closable: false,
        })
        .modal('show')
    
        
  },

});

