import DS from 'ember-data';

export default DS.Model.extend({
  level: DS.attr(), 
  source: DS.attr(),
   unit: DS.attr(),
 subject: DS.belongsTo('hssubject'),
 school: DS.belongsTo('secondaryschool'),

  grades: DS.hasMany('hsgrade')

});
