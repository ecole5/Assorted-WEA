define('students-records/tests/models/advanceStanding.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/advanceStanding.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/advanceStanding.js should pass jshint.\nmodels/advanceStanding.js: line 1, col 1, Expected an assignment or function call and instead saw an expression.\nmodels/advanceStanding.js: line 1, col 6, Missing semicolon.\nmodels/advanceStanding.js: line 1, col 7, Expected an assignment or function call and instead saw an expression.\nmodels/advanceStanding.js: line 1, col 9, Missing semicolon.\nmodels/advanceStanding.js: line 1, col 10, Expected an assignment or function call and instead saw an expression.\nmodels/advanceStanding.js: line 1, col 14, Missing semicolon.\nmodels/advanceStanding.js: line 1, col 15, Expected an assignment or function call and instead saw an expression.\nmodels/advanceStanding.js: line 1, col 1, \'mport\' is not defined.\nmodels/advanceStanding.js: line 1, col 7, \'DS\' is not defined.\nmodels/advanceStanding.js: line 3, col 16, \'DS\' is not defined.\nmodels/advanceStanding.js: line 4, col 9, \'DS\' is not defined.\nmodels/advanceStanding.js: line 5, col 18, \'DS\' is not defined.\nmodels/advanceStanding.js: line 6, col 12, \'DS\' is not defined.\nmodels/advanceStanding.js: line 1, col 10, \'from\' is not defined.\n\n14 errors');
  });
});