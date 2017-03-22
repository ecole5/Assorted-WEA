import Ember from 'ember';


export default Ember.Component.extend({

  store: Ember.inject.service(),
  termModel: null,
  processing: false,
  selectedTerm: null,


  init() {
    this._super(...arguments);

   
  
    var self = this;
    this.get('store').findAll('term').then(function (records) {
      self.set('termModel', records);
      
    });
   
  },


  actions: {
     
     setCurrentTerm(value){
      var term = this.get('store').peekRecord('term', value);
       this.set('selectedTerm',term);
   
     },
     go(){
       this.set('processing', true)
     }
  },

  

});

