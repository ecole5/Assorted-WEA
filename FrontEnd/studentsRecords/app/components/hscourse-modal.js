import Ember from 'ember';

/*This is a general edit code modal. It deals with modals that just have one property name. 
It is reusable. You can add, edit and delete codes from this panel. Data is feed in through select-code
where these components have outlets*/

export default Ember.Component.extend({

  store: Ember.inject.service(),
  currentModel: null, //current document in collection
  notDONE: null, //tied to the appropriate show boolean in select-code
  subjectModel: null,
  codeModel: null,
  lock: false,


 
   
  init(){
      this._super(...arguments);
    // get all documents of type modelName

    self = this;
     this.get('store').findAll('hssubject').then(function(records) {
        self.set('subjectModel', records);
    });

     this.get('store').findAll('hscourse').then(function(records) {
        self.set('codeModel', records);
         
    });
    
   
  
  
  },

  
  
  actions: {

    //Removes a code option
    removeCode(item) {
      item.destroyRecord();
    },

    //edit a code option (sometimes we have a race condition, where model is null and thus it wont set)
    selectSchool(value) {
      var current = this.get('currentModel');
      this.set('currentModel', null);
      
      var school = this.get('store').peekRecord('secondaryschool', value);
        current.set('school', school);
        current.save();
        this.set('lock',false);
    },

   //edit a code option (sometimes we have a race condition, where model is null and thus it wont set)
    selectSubject(value) {
   
        var current = this.get('currentModel');
        var subject = this.get('store').peekRecord('hssubject', value);
        current.set('subject', subject);
        current.save();
        this.set('lock',false);
    
        

    },

    editLevel(value) {
      var current = this.get('currentModel');
        current.set('level', value);
        current.save();
        this.set('lock',false);
       
    },
    
    editSource(value) {

      var current = this.get('currentModel');
      current.set('source', value);
      current.save();
      this.set('lock',false);
      
    },
    
    editUnit(value) {
      var current = this.get('currentModel');
      current.set('unit', value);
      current.save();
      this.set('lock',false);
  
    },
    //Set context of what is being currently edited
    setCurrentModel(model) {
        if (this.get('lock')){
          console.log("Tried to acsses lock");
        }
        else{
            this.set('currentModel',model);
              this.set('lock',true);
               console.log("got lock");
        }
       
     
     
    },

    //Create new document
    newCode() {
      var myStore = this.get('store');
      var newCode = myStore.createRecord("hscourse", {
        level: "NEW LEVEL",
        source: "NEW SOURCE",
        unit: "NEW UNIT",
        subject: null,
        school: null,
      });
      newCode.save();

    },
    
    //finish editing and close the modal
    exit: function () {
      this.set('notDONE', false); //component control in select-code
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
  willDestroyElement() {
    console.log("Being destroyed");
  }

});

