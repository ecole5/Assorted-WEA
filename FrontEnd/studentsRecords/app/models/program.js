import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(), 
  level: DS.attr('number'), // student year
  load: DS.attr(), // F
  status: DS.attr(), // are they currently doing the program
  term: DS.belongsTo('term'),
  plan: DS.belongsTo('plan'), 

});
