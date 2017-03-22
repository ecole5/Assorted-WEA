
import Ember from 'ember';
export default Ember.Component.extend({

  store: Ember.inject.service(),
  selectedFaculty: null,
  backToMain: null,
  planModels: null,
  categoryModel: null,
  showPlan: false,
  chosenPlan: null,
  showCategoryModal: null,
  selectedCategory: null,

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
      this.set('backToMain',false);
      this.set('chosenPlan', plan);
      this.set('showPlan', true);

    },
    
      
    backFromPlan(){
      this.set('backToMain', true);
      this.set('showPlan', false);
    },

    newCategory(){
    
  

      var newCat = this.get('store').createRecord("category", {
        name: "New category",
        allRules: true,
        independent: false,
        faculty: this.get('selectedFaculty'),
      });

      newCat.save();

      this.set('selectedCategory', newCat);
        this.set("showCategoryModal", true);
     

    },
  

  },

  

});

