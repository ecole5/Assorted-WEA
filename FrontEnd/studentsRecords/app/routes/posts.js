import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    if (this.get('oudaAuth').get('isAuthenticated')) {
      return this.store.findAll('post');
    } else {
      this.transitionTo('login');
    }
  }

});
// "this.store" is the data store represented by the adapter
// The default data adapter is REST API adapter
