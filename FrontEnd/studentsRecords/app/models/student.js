import DS from 'ember-data';

export default DS.Model.extend({
  number: DS.attr(),
  firstName: DS.attr(),
  lastName: DS.attr(),
  DOB: DS.attr('date'),
  photo: DS.attr(),
  resInfo: DS.belongsTo('residency'),
  genInfo: DS.belongsTo('gender'),
  registrationComments: DS.attr(),
  basisOfAdmission: DS.attr(),
  admissionAverage: DS.attr('number'),
  admissionComments: DS.attr(),
  scholarshipInfo: DS.hasMany('scholarship', {async: true}),
  advanceStanding: DS.hasMany('advancestanding', {async: true}),
  highSchoolGrades: DS.hasMany('hsgrade', {async: true}),
  
});
