define('students-records/components/find-student', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Component.extend({

        store: _ember['default'].inject.service(),
        notDONE: null,

        actions: {
            exit: function exit() {
                //this.set('notDONE', false);
                // Ember.$('.ui.modal').modal('hide');
            },
            search: function search(student) {}
        },

        didRender: function didRender() {
            _ember['default'].$('.ui.modal').modal('show');
        }
    });
});