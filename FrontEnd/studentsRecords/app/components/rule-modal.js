import Ember from 'ember';


export default Ember.Component.extend({

  store: Ember.inject.service(),
  ruleModel: null, //all documents in collection of type modelName
  notDONE: null, 
  selectedComment: null,
  selectingComment: null,
  commentModel: null,
  ruleCommentModel: null,
  logicalModel:null,
  expressionEditor: null,


   init() {
    this._super(...arguments);
   
    

    //Get all facultys
    var self = this;
 

   
       //Get all rules for this faculty
    this.get('store').findAll('comment').then(function (records) {
      self.set('commentModel', records);
    });
   
   //Get all rules for this faculty
    this.get('store').findAll('rulecomment').then(function (records) {
      self.set('ruleCommentModel', records);
    });
   },


  actions: {

    editName(value) {
     
        var model = this.get('ruleModel');
        model.set('name', value);
        model.save();
    },

    newComment() {
      this.set('selectingComment', true);
    },

   
    saveComment(){
      this.set('selectingComment', false);
      
      var comm = this.get('store').peekRecord('comment', this.get('selectedComment'));
      if (comm){
      var newComment = this.get('store').createRecord("rulecomment", {
        comment: comm,
        rule: this.get('ruleModel'),
      });

      newComment.save();
    }
    
    this.set('selectedComment', null);

    },

    setComment(comment){
      this.set('selectedComment', comment);
      
    },

  
    cancelComment(){
      this.set('selectingComment', false);

    },
    remove(item){
      item.destroyRecord();
    },
    openEdit(){
      this.set('expressionEditor', true);
      
    },
    clearExpresion(){
      var rule = this.get('ruleModel');
      rule.set('log', null);
      rule.save();
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

