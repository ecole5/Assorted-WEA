import DS from 'ember-data';

export default DS.Model.extend({
  mark: DS.attr('number'), 
  student: DS.belongsTo('student'),
  source: DS.belongsTo('hscourse')

});
