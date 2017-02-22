import Ember from 'ember';

export default Ember.Component.extend({


    isAddingResidency: false,
    isAddingGender: false,
    ResidencyModel: null, 
    GenderModel: null, 
    currentModel: null,
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

        editItem(value) {
        var updatedItem = this.get('currentModel');
         updatedItem.set('name', value);
          updatedItem.save();
        },

         setCurrentModel(model) { //this deals with the problem 
            this.set('currentModel',model);
        },

        addNewResidency() {
            this.set('rName', null);
            this.set('isAddingResidency', true);
        },
        
        addNewGender() {
            this.set('gName', null);
            this.set('isAddingGender', true);
        },

        saveResidency() {
            var myStore = this.get('store');
            var newThing = myStore.createRecord('residency', {
                name: this.get('rName')
            });
            newThing.save();
            this.set('isAddingResidency', false);
        },

           saveGender() {
            var myStore = this.get('store');
            var newThing = myStore.createRecord('gender', {
                name: this.get('gName')
            });
            newThing.save();
            this.set('isAddingGender', false);
        },

        cancelNewResidency() {
            this.set('isAddingResidency', false);
        },
        cancelNewGender() {
            this.set('isAddingGender', false);
        }

        
    }


});

