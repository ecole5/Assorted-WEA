define('students-records/tests/models/student.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/student.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/student.js should pass jshint.');
  });
});