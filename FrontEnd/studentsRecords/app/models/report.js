import DS from 'ember-data';

export default DS.Model.extend({
  //reportID: DS.attr(),
  students: DS.hasMany('student'),
});
