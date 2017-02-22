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

  didRender() {
      Ember.$('.ui.modal')
              .modal({
          closable: false,
        })
        .modal('show');
  },

    actions:{
    exit: function () {
      this.set('notDONE', false);
      this.set('result',"");
           
      Ember.$('this').removeData('.ui.modal');     
      Ember.$('.ui.modal').modal('hide'); 
      Ember.$('.ui.modal').remove();
      },
    search: function(){
        var myStore =this.get('store');
        var stdid = this.get('studentID');
        var located = false;
        var tempIndex = 0;
        var tempOffset = 0;
        var notFound=false;
        var stuRec=this.get('studentRecords');

console.log('0');

var self =this;
console.log(stdid);
       this.get('store').query('student',{stuid: stdid,student:true,find:true}).then(function(student) { 
       console.log(student.get('length'));
      if(student.get('length')==0){
        notFound=true;
      }
      console.log(notFound);

console.log('0');

         console.log(student);
         var tempStudent  = student;
        console.log('1');

        if(!notFound){
          //do{
           console.log('2');
           console.log(student.get('firstObject'));
           var index = self.get('studentsModel').indexOf(student.get('firstObject'));
           console.log(self.get('studentsModel'));

           console.log(index);
           console.log(self.get('studentsModel').get('length'));
           console.log('3');
           if(index===-1){
             console.log('5');
             self.set('offset', self.get('offset') + self.get('pageSize'));
           }
           else{
             console.log('6');
             located=true;
             self.set('INDEX', index);
           }
           console.log('7');
          //}while(!located);
          console.log('10');
          self.set("result","");
          self.send('exit');
        }
        else{
          console.log('8');
          self.set("result","No student found");
        }


    });
  

    },
    }
    
});
