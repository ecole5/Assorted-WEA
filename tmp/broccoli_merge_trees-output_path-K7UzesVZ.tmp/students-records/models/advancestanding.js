define('students-records/models/advancestanding', ['exports', 'ember-data'], function (exports, _emberData) {
    exports['default'] = _emberData['default'].Model.extend({
        course: _emberData['default'].attr(),
        description: _emberData['default'].attr(),
        units: _emberData['default'].attr(),
        grade: _emberData['default'].attr(),
        from: _emberData['default'].attr(),
        student: _emberData['default'].belongsTo('student', { async: true })
    });
});