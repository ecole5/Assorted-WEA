import Ember from 'ember';


export default Ember.Component.extend({

  store: Ember.inject.service(),
  categoryModel: null, //all documents in collection of type modelName
  notDONE: null, 
  selectedComment: null,
  selectingComment: null,
  commentModel: null,
  catCommentModel: null,


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
   },


  actions: {


    editName(value) {
     
        var model = this.get('categoryModel');
        model.set('name', value);
        model.save();
    },

    selectStyle(value) {
      
      var model = this.get('categoryModel');
      if (value === "true"){
        model.set('allRules', true);
      }
      else{
         model.set('allRules', false);
      }
      
        model.save();
    },

      selectIndependent(value) {
      
      var model = this.get('categoryModel');
      if (value === "true"){
        model.set('independent', true);
      }
      else{
         model.set('independent', false);
      }
      
        model.save();
    },

    newComment() {
      this.set('selectingComment', true);
    },

   
    saveComment(){
      this.set('selectingComment', false);
      
      var comm = this.get('store').peekRecord('comment', this.get('selectedComment'));
      if (comm){
      var newComment = this.get('store').createRecord("catcomment", {
        comment: comm,
        category: this.get('categoryModel'),
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

