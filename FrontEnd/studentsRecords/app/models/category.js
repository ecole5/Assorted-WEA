import DS from 'ember-data';

export default DS.Model.extend({
  
  
       
  
    
     name: DS.attr(),
        allRules: DS.attr('boolean'), //indicate weither to evaluate all rules or evalulate rules in order within category
        independent: DS.attr('boolean'), //Evalualte categoery indpedently or in order
        faculty: DS.belongsTo('faculty'),
        rules: DS.hasMany('rule'),


});
