define('students-records/helpers/app-version', ['exports', 'ember', 'students-records/config/environment'], function (exports, _ember, _studentsRecordsConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _studentsRecordsConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});