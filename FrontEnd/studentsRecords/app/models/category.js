import DS from 'ember-data';

export default DS.Model.extend({
  
  
       
  
    
     name: DS.attr(),
        evalOrder:DS.attr('number'), //Order of evaluation of this category relative to others in the same faculty
        allRules: DS.attr('boolean'), //indicate weither to evaluate all rules or evalulate rules in order within category
        independent: DS.attr('boolean'), //Evalualte categoery indpedently or in order
        faculty: DS.belongsTo('category'),        


});
