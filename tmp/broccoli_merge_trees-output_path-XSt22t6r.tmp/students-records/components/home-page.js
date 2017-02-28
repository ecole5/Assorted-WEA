define('students-records/components/home-page', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    didInsertElement: function didInsertElement() {
      //    Ember.$('.tabular.menu .item').tab();
      _ember['default'].$(document).ready(function () {
        _ember['default'].$('.ui .item').on('click', function () {
          _ember['default'].$('.ui .item').removeClass('active');
          _ember['default'].$(this).addClass('active');
        });
      });
    },

    isHomeShowing: true,
    isStudentsRecordsDataEntry: false,
    isAboutShowing: false,

    actions: {
      home: function home() {
        this.set('isHomeShowing', true);
        this.set('isStudentsRecordsDataEntry', false);
        this.set('isAboutShowing', false);
      },

      studentsDataEntry: function studentsDataEntry() {
        this.set('isHomeShowing', false);
        this.set('isStudentsRecordsDataEntry', true);
        this.set('isAboutShowing', false);
      },

      about: function about() {
        this.set('isHomeShowing', false);
        this.set('isStudentsRecordsDataEntry', false);
        this.set('isAboutShowing', true);
      }
    }
  });
});