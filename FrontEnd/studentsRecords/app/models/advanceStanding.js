import DS from 'ember-data';

export default DS.Model.extend({
  course: DS.attr(),
  description: DS.attr(),
  units: Number,
  grade: DS.attr(),
  from: DS.attr(),
  student: DS.belongsTo('student', {async: true})
});
