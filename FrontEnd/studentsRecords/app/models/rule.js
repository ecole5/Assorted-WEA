import DS from 'ember-data';

export default DS.Model.extend({
  
  
        name: DS.attr(), 
        log:  DS.attr(),
        plan: DS.belongsTo('plan'),    
        category: DS.belongsTo('category'), 
        logExpressions: DS.hasMany('logexpression'),
        comment: DS.hasMany('rulecomment'),
  

});
