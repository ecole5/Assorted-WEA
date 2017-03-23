import Ember from 'ember';

export default Ember.Component.extend({

    store: Ember.inject.service(),
    terms:null,
    critTerm: null,
    crit:null,
    haveReport:null,
    pdf:null,
    reportJSON:null,

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
    
    displayReport:function(){

    },

    downloadReport:function(){

    },

    setTerm: function(term){
        this.set('critTerm', term);
    },

    setCrit: function(criteria){
        this.set('crit', criteria);
    },
    //this method by-passes Ember Data
    getReport: function(){

    //uncommet this for actual use
        /*if(this.get('critTerm')===null||this.get('crit')===null){

        }else{

            var data = { term: this.get('critTerm'), criteria: this.get('crit') },
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

            this.set('reportJSON',test);
            var test2=this.get('reportJSON');
            var lines=["Adjudication Report"];
            for(var i=1;i<test2.employees.length+1;i++){
                lines[i]=test2.employees[i-1].firstName + " " + test2.employees[i-1].lastName;
            }

            //var doc = new jsPDF();
            var doc = new jsPDF();
            doc.text(lines,10,10);
            doc.output('dataurlnewwindow');
            //doc.save('test.pdf');
            //console.log('3');

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
