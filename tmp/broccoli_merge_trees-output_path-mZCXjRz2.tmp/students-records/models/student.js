define('students-records/models/student', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    number: _emberData['default'].attr(),
    firstName: _emberData['default'].attr(),
    lastName: _emberData['default'].attr(),
    gender: _emberData['default'].attr('number'),
    DOB: _emberData['default'].attr('date'),
    photo: _emberData['default'].attr(),
    resInfo: _emberData['default'].belongsTo('residency'),
    genInfo: _emberData['default'].belongsTo('gender'),

    registrationComments: _emberData['default'].attr(),
    basisOfAdmission: _emberData['default'].attr(),
    admissionAverage: _emberData['default'].attr('number'),
    admissionComments: _emberData['default'].attr(),
    scholarshipInfo: _emberData['default'].hasMany('scholarship', { async: true }),
    advanceStanding: _emberData['default'].hasMany('advancestanding', { async: true })
  });
});