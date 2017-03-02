import Ember from 'ember';

export default Ember.Component.extend({

    store: Ember.inject.service(),
    notDONE: null,
    limit: 10,
    offset: null,
    pageSize: 10,
    result: "",
    studentID: null,
    studentRecord: null,
    studentsModel: null,
    INDEX: null,
    firstIndex: null,
    lastIndex: null,
    currentIndex: null,
    jump: null,

    findRec(self, student, ofst){
      {
        var located = false;
        var tempOffset = 0;
      store: Ember.inject.service();
      var mystore = this.get('store');
      mystore.query('student', {
      limit: self.get('limit'),
      offset: ofst,
      include: 'scholarship'
    }).then(function (records) {
           self.set('studentsModel', records);
           var index = self.get('studentsModel').indexOf(student.get('firstObject'));

           if(self.get('studentsModel').get('length')===0){
            self.set('offset', tempOffset);
            located=true;
           }
           else if(index===-1){
             self.findRec(student, ofst + self.get('pageSize'));
           }
           else{
             located=true;
             self.set('offset', ofst);
             self.set('INDEX', index);
             self.set("result","");
             self.send('exit', true, self.get('offset'), self.get('INDEX'));
           }       
    });
      }
    },
  didRender() {
      Ember.$('.ui.modal')
              .modal({
          closable: false,
        })
        .modal('show');
  },

    actions:{
    exit: function (move, ofst, ind) {
      this.set('notDONE', false);
      this.set('result',"");
      if(move){
        this.set('offset',ofst);
        this.set('INDEX',ind);
      }
      
      Ember.$('this').removeData('.ui.modal');     
      Ember.$('.ui.modal').modal('hide'); 
      Ember.$('.ui.modal').remove();
      },
    search: function(){
        var tempOffset = 0;
        var notFound=false;
        var stdid=this.get('studentID');

var self =this;
          tempOffset=self.get('offset');
          self.set('offset',0);

       this.get('store').query('student',{
         stuid: parseInt(self.get('studentID')),
         student:true,
         find:true})
       .then(function(student) { 
      if(student.get('length')===0){
        notFound=true;
      }
        if(!notFound){
          self.findRec(self, student, 0);

          }else{
          self.set("result","No student found");
        }

});
    },
  },
  
  
    
});
