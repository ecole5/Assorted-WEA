import Ember from 'ember';

export default Ember.Component.extend({

    store: Ember.inject.service(),
    terms:null,
    critTerm: null,
    crit:null,
    haveReport:null,

    init(){
        this._super(...arguments);
        var self = this;
        this.get('store').findAll('term').then(function (records) {
            self.set('terms', records);
        });
    },

actions:{
    updateTerms: function(){
        this.set('terms', this.get('store').findall('term')); 
    },
    
    test:function(){
        console.log(this.get('crit'));
        console.log(this.get('critTerm'));
    },

    setTerm: function(term){
        this.set('critTerm', term);
    },

    setCrit: function(criteria){
        this.set('crit', criteria);
    },
    //this method by passes Ember Data
    getReport: function(){

        //if(this.get('critTerm')===null||this.get('crit')===null){

        //}else{

           /* var data = { term: this.get('critTerm'), criteria: this.get('crit') },
            host = this.get('store').adapterFor('application').get('host'),
            //namespace = this.store.adapterFor('application').namespace,
            getURL = [ host, 'reports'].join('/'); 
            
            Ember.$.get(getURL, data).then(
                function (response) {



                    displayDownloadOption();    
            }); */


            this.set("haveReport",true);
   
            var test={"employees":[
                    {"firstName":"John", "lastName":"Doe"}, 
                    {"firstName":"Anna", "lastName":"Smith"},
                    {"firstName":"Peter", "lastName":"Jones"}
                ]
            }

            //var doc = new jspdf();
            //doc.text('Hello World',10,10);

        //}


        /*var report = $.getJSON(this.store.adapterFor('application').get('')).then(
            function (response) {}
        )*/
    }
}

 /* model: function(params) {
      return $.getJSON
      //this.store.find(user, params.user_id);
  }*/

  
});
