import Ember from 'ember';

export default Ember.Controller.extend({
   actions:{
    receiveFile: function(file){
      var asset;

      asset = this.store.createRecord('asset', {
        file:  file,
        fileName: file.name,
        title: 'something'
      });

      asset.save().then(function(asset){
        console.info(asset.get('UPfileUrl'));
      }, function(error){
        console.debug('Upload failed', error);
      }, 'file upload');
    }
  }
});
