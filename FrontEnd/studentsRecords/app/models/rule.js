import DS from 'ember-data';

export default DS.Model.extend({
  
  
        name: DS.attr(), 
        log:  DS.attr(),
        plan: DS.belongsTo('plan'),    
        category: DS.belongsTo('category'), 
        type: DS.attr('boolean'),
        comment: DS.hasMany('rulecomment'),
  

});
