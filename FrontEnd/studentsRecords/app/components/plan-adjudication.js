import Ember from 'ember';
export default Ember.Component.extend({

  store: Ember.inject.service(),
  selectedPlan: null,
  notDONE: null,
  

  init() {
    this._super(...arguments);
   
    

 

  },


  actions: {
 back(){
   this.set('notDONE', false);
   console.log("back called");
 }
  },

  

});

