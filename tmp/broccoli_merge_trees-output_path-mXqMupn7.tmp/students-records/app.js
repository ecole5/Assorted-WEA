define('students-records/app', ['exports', 'ember', 'students-records/resolver', 'ember-load-initializers', 'students-records/config/environment'], function (exports, _ember, _studentsRecordsResolver, _emberLoadInitializers, _studentsRecordsConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({

    modulePrefix: _studentsRecordsConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _studentsRecordsConfigEnvironment['default'].podModulePrefix,
    Resolver: _studentsRecordsResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _studentsRecordsConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});