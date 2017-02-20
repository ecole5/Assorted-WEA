import DS from 'ember-data';

export default DS.Model.extend({
  mark: DS.attr('number'), 
  source: DS.belongsTo('hscourse')

});
