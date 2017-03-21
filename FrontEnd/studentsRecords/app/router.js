import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', {path: '/'});
  this.route('findStudent');
  this.route('import');
  this.route('admin-portal');
  this.route('login');
  this.route('user');
  this.route('about');
  this.route('contact');
});


export default Router;
