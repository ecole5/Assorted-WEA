define('students-records/models/student', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    number: _emberData['default'].attr(),
    firstName: _emberData['default'].attr(),
    lastName: _emberData['default'].attr(),
    gender: _emberData['default'].attr('number'),
    DOB: _emberData['default'].attr('date'),
    photo: _emberData['default'].attr(),
    resInfo: _emberData['default'].belongsTo('residency')

  });
});