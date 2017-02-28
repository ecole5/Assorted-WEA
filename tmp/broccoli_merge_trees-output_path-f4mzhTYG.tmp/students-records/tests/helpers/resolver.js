define('students-records/tests/helpers/resolver', ['exports', 'students-records/resolver', 'students-records/config/environment'], function (exports, _studentsRecordsResolver, _studentsRecordsConfigEnvironment) {

  var resolver = _studentsRecordsResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _studentsRecordsConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _studentsRecordsConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});