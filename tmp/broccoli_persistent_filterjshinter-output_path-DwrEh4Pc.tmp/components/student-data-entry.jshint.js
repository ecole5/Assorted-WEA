QUnit.module('JSHint | components/student-data-entry.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'components/student-data-entry.js should pass jshint.\ncomponents/student-data-entry.js: line 139, col 7, Missing semicolon.\ncomponents/student-data-entry.js: line 150, col 7, Missing semicolon.\ncomponents/student-data-entry.js: line 311, col 11, \'self\' is defined but never used.\ncomponents/student-data-entry.js: line 152, col 71, \'index\' is not defined.\n\n4 errors');
});
