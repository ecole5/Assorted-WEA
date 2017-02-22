import Ember from 'ember';

export default Ember.Component.extend({

  store: Ember.inject.service(),
  limit: 10,
  offset: 0,
  pageSize: 10,

  studentsModel: null,
  INDEX: null,
  notDONE: null,

  actions: {
    loadNext: function () {
      //console.log(this.get("studentsModel"));
      Ember.$('.ui.modal').modal('hide');
      this.set('offset', this.get('offset') + this.get('pageSize'));
      Ember.$('.ui.modal').modal('show');
            console.log(this.get('offset') +" "+ this.get('INDEX'));

    },

    loadPrevious: function () {
      if (this.get('offset') >= this.get('pageSize')) {
        Ember.$('.ui.modal').modal('hide');
        this.set('offset', this.get('offset') - this.get('pageSize'));
        Ember.$('.ui.modal').modal('show');
              console.log(this.get('offset') +" "+ this.get('INDEX'));

      }
    },

    getStudent: function (student) {
        var index = this.get('studentsModel').indexOf(student);
        this.set('INDEX', index);
              console.log(this.get('offset') +" "+ this.get('INDEX'));

    },

    exit: function () {
      this.set('notDONE', false);
      console.log(this.get('offset') +" "+ this.get('INDEX'));

           
      Ember.$('this').removeData('.ui.modal');     
      Ember.$('.ui.modal').modal('hide'); 
      Ember.$('.ui.modal').remove();
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
