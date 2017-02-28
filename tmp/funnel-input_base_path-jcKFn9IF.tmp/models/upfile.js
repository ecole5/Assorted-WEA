import DS from 'ember-data';

export default DS.Model.extend({
  attachment: DS.attr('file'),
  fileName: DS.attr()
});
