define('students-records/components/show-logo', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    logoIsShowing: false,
    actions: {
      showLogo: function showLogo() {
        this.set('logoIsShowing', true);
      },
      hideLogo: function hideLogo() {
        this.set('logoIsShowing', false);
      }
    }

  });
});