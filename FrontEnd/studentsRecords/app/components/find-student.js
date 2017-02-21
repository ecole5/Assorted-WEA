import Ember from 'ember';

export default Ember.Component.extend({

    store: Ember.inject.service(),
    notDONE: null,
    limit: 10,
    //offset: 0,
    pageSize: 10,
    result: "",
    studentID: null,

    studentsModel: null,
    INDEX: null,


    actions:{
    exit: function () {
      this.set('notDONE', false);
      
           
      Ember.$('this').removeData('.ui.modal');     
      Ember.$('.ui.modal').modal('hide'); 
      Ember.$('.ui.modal').remove();
      },
    search: function(){
        var myStore =this.get('store');
        var stdid = this.get('studentID');
        var found = false;
        var tempIndex = this.get('INDEX');
        var tempOffset = this.get('offset');
       // try{
        console.log(stdid);
        var stdret=myStore.find('student',{id: stdid}); //var peters = this.store.find('person', { name: "Peter" });
        console.log(stdret);
      //}
      //catch(e){
       // stdret=-1;
       // console.log('found nothing');
      //}
        this.set("offset",0);
        console.log(stdid);
        
        do{
          console.log('2');
          var index = this.get('studentsModel').indexOf(stdret);
          console.log('3');
          if(this.get('studentsModel').length===0){
            console.log('4');
            this.set('offset', tempOffset);
            
            found=false;
            break;
          }
          else if(index===-1){
            console.log('5');
            this.set('offset', this.get('offset') + this.get('pageSize'));
          }
          else{
            console.log('6');
            found=true;
            this.set('INDEX', index);
          }
          console.log('7');
        }while(!found);
        //this.set('INDEX', index);
        console.log('8');
        if(found === false){
          console.log('9');
          this.set("result","No student found");
        }
        else{
          console.log('10');
          this.set("result","");
          this.send('exit');
        }


        
    //loadNext: function () {
      //console.log(this.get("studentsModel"));
      //Ember.$('.ui.modal').modal('hide');
      //this.set('offset', this.get('offset') + this.get('pageSize'));
      //Ember.$('.ui.modal').modal('show');
    //}

    //getStudent: function (student) {
        //var index = this.get('studentsModel').indexOf(student);
        //this.set('INDEX', index);
    //},




       // var index = this.get('studentsModel').indexOf(studentID);
     //   this.set('INDEX', index);


    }
  },


  didRender() {
      Ember.$('.ui.modal')
              .modal({
          closable: false,
        })
        .modal('show');
  }
});
