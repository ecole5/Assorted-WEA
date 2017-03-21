import DS from 'ember-data';

export default DS.Model.extend({
  
  
     comment: DS.belongsTo('comment'),
     rule: DS.belongsTo('rule')  
        


});
