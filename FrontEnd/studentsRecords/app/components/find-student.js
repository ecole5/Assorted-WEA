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

    findRec(self, student, ofst){
      {
        var located = false;
        var tempIndex = 0;
        var tempOffset = 0;
        var notFound=false;
        console.log('a');
      store: Ember.inject.service();
      var mystore = this.get('store');
              console.log('b');

      mystore.query('student', {
      limit: self.get('limit'),
      offset: ofst,
      include: 'scholarship'
    }).then(function (records) {
           self.set('studentsModel', records);
           var index = self.get('studentsModel').indexOf(student.get('firstObject'));
           //console.log('studentModel: ');
           //console.log(self.get('studentsModel'));
           //console.log('index:');
           //console.log(index);
           console.log('studentModel length: ');
           console.log(self.get('studentsModel').get('length'));
           console.log('3');
           if(self.get('studentsModel').get('length')==0||ofst>=130){
            console.log('4');
            self.set('offset', tempOffset);
            located=true;
           }
           else if(index===-1){
             console.log('5');
             findRec(student, ofst + self.get('pageSize'))
             //self.set('offset', self.get('offset') + self.get('pageSize'));
           }
           else{
             console.log('6');
             located=true;
             self.set('offset', ofst);
             self.set('INDEX', index);
             console.log(self.get('offset') +" "+ self.get('INDEX'));
             console.log('7');        
             self.set("result","");
             self.send('exit', true, self.get('offset'), self.get('INDEX'));
           }
           console.log('10');         
       
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
        var myStore =this.get('store');
        var stdid = this.get('studentID');
        var located = false;
        var tempIndex = 0;
        var tempOffset = 0;
        var notFound=false;
        var stuRec=this.get('studentRecords');

console.log('0');

var self =this;
          self.set('tempOffset', 'offset');
          self.set('offset',0);

///this.get('store').query('student', {
   //   limit: self.get('limit'),
   //   offset: self.get('offset'),
   //   include: 'scholarship'
   // }).then(function (records) {

       this.get('store').query('student',{
         stuid: stdid,
         student:true,
         find:true})
       .then(function(student) { 
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
          console.log('2');
          self.findRec(self, student, 0);


          }else{
          console.log('8');
          self.set("result","No student found");
        }
          
          //console.log('firstObject: ');
          //console.log(student.get('firstObject'));
          
//do{
/*
myStore.query('student', {
      limit: self.get('limit'),
      offset: self.get('offset'),
      include: 'scholarship'
    }).then(function (records) {

           self.set('studentsModel', records);

           var index = self.get('studentsModel').indexOf(student.get('firstObject'));
           //console.log('studentModel: ');
           //console.log(self.get('studentsModel'));

           //console.log('index:');
           //console.log(index);

           console.log('studentModel length: ');
           console.log(self.get('studentsModel').get('length'));
           console.log('3');
           if(self.get('studentsModel').get('length')==0||self.get('offset')>=130){
            console.log('4');
            self.set('offset', tempOffset);
            located=true;
           }
           else if(index===-1){
             console.log('5');
             self.set('offset', self.get('offset') + self.get('pageSize'));
           }
           else{
             console.log('6');
             located=true;
             //self.set('offset','tempOffset');
             self.set('INDEX', index);
           }
           console.log('7');
          
          console.log('10');
          self.set("result","");
          self.send('exit');
        



            });*/
            
          //}while(!located);

});
    },
  },
  
  
    
});
