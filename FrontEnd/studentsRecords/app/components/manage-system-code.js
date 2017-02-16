import Ember from 'ember';

export default Ember.Component.extend({


   
    ResidencyModel: null, 
    GenderModel: null, 
    currentModel: null,
    showGender: false,
    store: Ember.inject.service(),


 init() {
    this._super(...arguments);
    

 // load Residency data model
    this.set('ResidencyModel', this.get('store').findAll('residency'));

       // load gender data model
        this.set('GenderModel', this.get('store').findAll('gender'));
 },

    actions: {
        removeItem(item) {
            item.destroyRecord();  
        },

/*
        save(){
            this.get('ResidencyModel').forEach(obj => {
                
                obj.save();
            });
        },
*/
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

         showGender() { //this deals with the problem 
            this.set('showGender',true);
        },

        addNewResidency() {
             var myStore = this.get('store');
            var newThing = myStore.createRecord('residency', {
                name: 'Edit Me'
            });
            newThing.save();
           
        },
        
        addNewGender() {
            var myStore = this.get('store');
            var newThing = myStore.createRecord('gender', {
                name: 'Edit Me'
            });
            newThing.save();
            
        },

       
    }


});

