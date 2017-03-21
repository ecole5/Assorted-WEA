import Ember from 'ember';

export default Ember.Component.extend({

    terms:null,
    critTerm: null,
    crit:null,

    init(){
        this.set('terms', this.get('store').findall('term')); 
    },

    setTerm(term){
        this.set('critTerm', term);
    },

    //this method by passes Ember Data
    getReport(){

        
        var data = { username: user, password: pass },
       host = this.store.adapterFor('application').get('host'),
       //namespace = this.store.adapterFor('application').namespace,
       getURL = [ host, 'reports'].join('/'); 

   Ember.$.get(getURL, data).then(
       function (response) {

       });
   
        /*var report = $.getJSON(this.store.adapterFor('application').get('')).then(
            function (response) {}
        )*/
    }

 /* model: function(params) {
      return $.getJSON
      //this.store.find(user, params.user_id);
  }*/

  
});
