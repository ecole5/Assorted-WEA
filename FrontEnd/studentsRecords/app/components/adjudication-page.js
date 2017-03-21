import Ember from 'ember';
export default Ember.Component.extend({

  store: Ember.inject.service(),
  main: true,
  showSelectFaculty: false,
  showPerform: false,
  facultyModel: null,
  showCategory: false,
  chosenFaculty: null,
  mainBack: false,



  init() {
    this._super(...arguments);
   
    

    // get all documents of type modelName
    var self = this;
    this.get('store').findAll('faculty').then(function (records) {
      self.set('category', records);
    });

    /*
    this.get('store').findAll('comment');
    var newCode = myStore.createRecord("category", {
        name: "bob",
        comments: null

      });
      newCode.save();
    
    var comment = this.get('store').peekRecord('comment', value);
      model.set('subject', subject);
      model.save();
      */
   
  },


  actions: {
      showSelectFaculty(){
        this.set('main', false);
        this.set('showSelectFaculty', true);

      },
      showPerform(){
          this.set('main',false);
          this.set('showPerform',true);
      },

      showCategory(faculty){
        this.set('showSelectFaculty', false);
        this.set('showCategory', true);
        this.set('chosenFaculty', faculty);
        this.set('mainBack', true);
      },

      
     
      back(where)
      {
        if (where == "main"){
          this.set('main', true);
          this.set('showPerform', false);
           this.set('showSelectFaculty', false);
           this.set('showCategory', false)
        }
      }

  },

  

});

