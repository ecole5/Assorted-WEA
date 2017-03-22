import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // before merge route
  //this.route('home', {path: '/'});
  this.route('home', {path: '/'}, function() {
    this.route('perform-adjudication');
  });
  this.route('findStudent');
  this.route('import');
  this.route('admin-portal');
  this.route('login');
  this.route('user');
  this.route('about');
  this.route('contact');
});


export default Router;
