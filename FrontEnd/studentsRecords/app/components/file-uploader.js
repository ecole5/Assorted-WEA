import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: 'uploader dropzone'.w(),
  classNameBindings: 'isDragging isDisabled:is-disabled'.w(),
  attributeBindings: 'data-uploader'.w(),
  'data-uploader': 'true',
  isDisabled: false,


  dragOver: function(event){
    // this is needed to avoid the default behaviour from the browser
    event.preventDefault();
  },

  dragEnter: function(event){
    event.preventDefault();
    this.set('isDragging', true);
  },

  dragLeave: function(event){
    event.preventDefault();
    this.set('isDragging', false);
  },

  drop: function(event){
    var file;

    if(!this.get('isDisabled')){
      event.preventDefault();
      this.set('isDragging', false);

      // only 1 file for now
      file = event.dataTransfer.files[0];
      this.set('isDisabled', true);
      this.sendAction('fileInputChanged', file);
    } else{
        alert('you can only upload on file at the time');
      console.error('you can only upload on file at the time');
    }
  },
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
  
