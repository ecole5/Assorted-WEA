import DS from 'ember-data';

export default DS.Model.extend({
  mark: DS.attr(),
  note: DS.attr(),
  program: DS.belongsTo('program'),
  student: DS.belongsTo('student'),
  course: DS.belongsTo('course'),

});
