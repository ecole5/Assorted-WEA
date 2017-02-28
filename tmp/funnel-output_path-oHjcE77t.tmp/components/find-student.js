import Ember from 'ember';

export default Ember.Component.extend({

    store: Ember.inject.service(),
    notDONE: null,

    actions:{
        exit: function(){
            //this.set('notDONE', false);
           // Ember.$('.ui.modal').modal('hide');
      },
      search: function(student){

      }
  },


  didRender() {
      Ember.$('.ui.modal')
        .modal('show');
  }
});
