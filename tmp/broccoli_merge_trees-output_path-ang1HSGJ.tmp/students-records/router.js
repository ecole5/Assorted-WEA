define('students-records/router', ['exports', 'ember', 'students-records/config/environment'], function (exports, _ember, _studentsRecordsConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _studentsRecordsConfigEnvironment['default'].locationType,
    rootURL: _studentsRecordsConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('home', { path: '/' });
  });

  exports['default'] = Router;
});