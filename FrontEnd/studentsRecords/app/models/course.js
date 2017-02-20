import DS from 'ember-data';

export default DS.Model.extend({
  courseLetter: DS.attr(), 
  courseNumber: DS.attr('Number'), 
   name: DS.attr(), 
  unit: DS.attr(), 
  
});
