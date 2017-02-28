define('students-records/models/gender', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    name: _emberData['default'].attr(),
    students: _emberData['default'].hasMany('student')

  });
});