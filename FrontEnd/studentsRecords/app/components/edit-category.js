import Ember from 'ember';
export default Ember.Component.extend({

  store: Ember.inject.service(),
  selectedFaculty: null,
  mainBack: null,
  planModels: null,
  categoryModel: null,

  init() {
    this._super(...arguments);
   
    

    //Get all facultys
    var self = this;
 

    //Get all plans for this faculty
    this.get('store').query('plan', {
      faculty: self.get('selectedFaculty').id,
    }).then(function (records) {
      self.set('planModels', records);
    });
    
    //Get all categories for this faculties
    this.get('store').query('category', {
      faculty: self.get('selectedFaculty').id,
    }).then(function (records) {
      self.set('categoryModel', records);
    });
   
  },


  actions: {
    editPlan(plan){
      
    }

  },

  

});

