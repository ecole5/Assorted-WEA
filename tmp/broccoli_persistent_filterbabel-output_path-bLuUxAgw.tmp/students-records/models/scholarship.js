define('students-records/models/scholarship', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    note: _emberData['default'].attr('string'),
    scholarshipID: _emberData['default'].attr('string'),
    student: _emberData['default'].belongsTo('student', { async: true })
  });
});