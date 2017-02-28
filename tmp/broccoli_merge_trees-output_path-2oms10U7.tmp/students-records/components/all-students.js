define('students-records/components/all-students', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    store: _ember['default'].inject.service(),
    limit: 10,
    offset: 0,
    pageSize: 10,

    studentsModel: null,
    INDEX: null,
    notDONE: null,

    actions: {
      loadNext: function loadNext() {
        _ember['default'].$('.ui.modal').modal('hide');
        this.set('offset', this.get('offset') + this.get('pageSize'));
        _ember['default'].$('.ui.modal').modal('show');
      },

      loadPrevious: function loadPrevious() {
        if (this.get('offset') >= this.get('pageSize')) {
          _ember['default'].$('.ui.modal').modal('hide');
          this.set('offset', this.get('offset') - this.get('pageSize'));
          _ember['default'].$('.ui.modal').modal('show');
        }
      },

      getStudent: function getStudent(student) {
        var index = this.get('studentsModel').indexOf(student);
        this.set('INDEX', index);
      },

      exit: function exit() {
        this.set('notDONE', false);
        _ember['default'].$('.ui.modal').modal('hide');
      }
    },

    didRender: function didRender() {
      _ember['default'].$('.ui.modal').modal({
        closable: false
      }).modal('show');
      console.log("0");
    }
  });
});