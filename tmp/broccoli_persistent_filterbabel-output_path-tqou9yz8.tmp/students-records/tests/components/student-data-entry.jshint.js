define('students-records/tests/components/student-data-entry.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/student-data-entry.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/student-data-entry.js should pass jshint.\ncomponents/student-data-entry.js: line 140, col 7, Missing semicolon.\ncomponents/student-data-entry.js: line 284, col 11, \'self\' is defined but never used.\ncomponents/student-data-entry.js: line 142, col 71, \'index\' is not defined.\n\n3 errors');
  });
});