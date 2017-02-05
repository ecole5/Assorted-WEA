import DS from 'ember-data';

export default DS.Model.extend({
  note: DS.attr('string'),
  student: DS.belongsTo('student', {async: true})
});
