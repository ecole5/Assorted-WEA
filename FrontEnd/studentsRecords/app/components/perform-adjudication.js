import Ember from 'ember';

/*This is a general edit code modal. It deals with modals that just have one property name. 
It is reusable. You can add, edit and delete codes from this panel. Data is feed in through select-code
where these components have outlets*/

export default Ember.Component.extend({

  store: Ember.inject.service(),
  main: true,
  showSelectCategory: false,


  init() {
    this._super(...arguments);
    notDONE: null;
   
    

    // get all documents of type modelName
    var self = this;
    this.get('store').findAll('program').then(function (records) {
      self.set('codeModel', records);
      
    });
   
  },


  actions: {
      showSelectCategory(){

      },
      back(){
          
          this.set('notDONE',false);

      }

  },

  

});

