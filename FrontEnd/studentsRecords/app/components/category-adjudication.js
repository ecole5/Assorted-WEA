
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
  showRuleModal: null,
  ruleModel: null,
  selectedRule: null,
  commentModel: null,
  catCommentModel: null,
  ruleCommentModel: null,

  init() {
    this._super(...arguments);
   
    

    //Get all facultys
    var self = this;
   //Get all rules for this faculty
    this.get('store').findAll('comment').then(function (records) {
      self.set('commentModel', records);
    });
   
   //Get all rules for this faculty
    this.get('store').findAll('catcomment').then(function (records) {
      self.set('catCommentModel', records);
    });
  

   //Get all rules for this faculty
    this.get('store').findAll('rulecomment').then(function (records) {
      self.set('ruleCommentModel', records);
    });

    //Get all rules for the faculty
    this.get('store').query('plan', {
      faculty: self.get('selectedFaculty').id,
    }).then(function (records) {
      self.set('planModels', records);
    });


       //Get all rules for this faculty
    this.get('store').findAll('rule').then(function (records) {
      self.set('ruleModel', records);
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
      var self = this;
      newCat.save().then(function (){ 
        self.get('store').query('category', {
      faculty: self.get('selectedFaculty').id,
    }).then(function (records) {
      self.set('categoryModel', records);
      self.set('selectedCategory', newCat);
       self.set("showCategoryModal", true);
    });
      });
      
      },
    

    remove(cat){
      cat.destroyRecord();
    },
    edit(cat){
        this.set('selectedCategory', cat);
        this.set("showCategoryModal", true);
    },

    newRule(cat){
     
      var newRule = this.get('store').createRecord("rule", {
        name: "New Rule",
        category: cat,
        plan: null,
        log: null,
      });

      newRule.save();

       this.set("showRuleModal", true);
    },

    editRule(rule){
       this.set('selectedRule', rule);
      this.set("showRuleModal", true);

    }
    
  

  },

  

});

