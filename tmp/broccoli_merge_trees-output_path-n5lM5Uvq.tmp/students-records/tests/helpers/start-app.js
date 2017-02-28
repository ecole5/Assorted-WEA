define('students-records/tests/helpers/start-app', ['exports', 'ember', 'students-records/app', 'students-records/config/environment'], function (exports, _ember, _studentsRecordsApp, _studentsRecordsConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _studentsRecordsConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _studentsRecordsApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});