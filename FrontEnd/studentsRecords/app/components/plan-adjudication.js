import Ember from 'ember';
export default Ember.Component.extend({

  store: Ember.inject.service(),
  selectedPlan: null,
  notDONEPlan: null,
  categoryModel: null,
  ruleModel: null,
  commentModel: null,
  catCommentModel: null,
  ruleCommentModel: null,
  showRuleModal: null,
  selectedRule: null,
  selectedFaculty: null,
  
  

  init() {
    this._super(...arguments);
 
    var self = this;

    this.get('store').findAll('comment').then(function (records) {
      self.set('commentModel', records);
    });
   

    this.get('store').findAll('catcomment').then(function (records) {
      self.set('catCommentModel', records);
    });
  

    this.get('store').findAll('rulecomment').then(function (records) {
      self.set('ruleCommentModel', records);
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
 back(){
   this.set('notDONEPlan', false);
 },
  newRule(cat,pla){
     
      var newRule = this.get('store').createRecord("rule", {
        name: "New Rule",
        category: cat,
        plan: pla,
        log: null,
      });

      newRule.save();
  this.set('selectedRule', newRule);

       this.set("showRuleModal", true);
    },

    editRule(rule){
       this.set('selectedRule', rule);
      this.set("showRuleModal", true);

    },
     remove(cat){
      cat.destroyRecord();
    },
  },

  

});

