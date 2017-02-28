define('students-records/tests/components/find-student.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/find-student.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/find-student.js should pass jshint.\ncomponents/find-student.js: line 13, col 24, \'student\' is defined but never used.\n\n1 error');
  });
});