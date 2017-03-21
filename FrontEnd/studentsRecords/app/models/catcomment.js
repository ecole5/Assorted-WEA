import DS from 'ember-data';

export default DS.Model.extend({
  
  
     comment: DS.belongsTo('comment'),
     category: DS.belongsTo('category')  
        


});
