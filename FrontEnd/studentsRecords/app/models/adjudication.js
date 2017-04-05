import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr(),
  termAVG: DS.attr(),
  unitPassed: DS.attr(),
  unitTotal: DS.attr(),
  note: DS.attr(),
  program: DS.belongsTo('program'),
   plan: DS.belongsTo('plan'),
    term: DS.belongsTo('term'),
     student: DS.belongsTo('student'),
     
     
  

  
});
