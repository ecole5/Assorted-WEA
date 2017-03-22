import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(), 
  level: DS.attr('number'), 
  load: DS.attr('number'), 
  status: DS.attr(), 

});
