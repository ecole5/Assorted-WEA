import DS from 'ember-data';

export default DS.Model.extend({
  
  
        name: DS.attr(), 
        evalOrder: DS.attr('number'), 
        logExpression:  DS.belongsTo('logexpression'),
        plan: DS.belongsTo('plan'),    
        category: DS.belongsTo('category'), 
  
  

});
