import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
title: DS.attr('string'),
  file: DS.attr(),
  fileURL: Ember.computed.alias('file.url'),
  fileName: DS.attr(),
  fileNameObserver: function(){
    /*
      This computed property is simply to when we receive the file from our
      servers on a store.find('asset', id) query we are still able to isolate
      it's file name correctly.
      If you api returns the imageName on the response you do not need this observer
    */
    var url,
        fileName;

    url = this.get('fileUrl');
    fileName = this.get('fileName');

    if(Ember.isPresent(url) && Ember.isNone(fileName)){
      return url.split('/').find(function(urlPart){
        return !!urlPart.match(/\.(?:csv|xlsx)$/) ? urlPart : null;
      });
    }

    else{
      return "";
    }
  }.observes('UPfileUrl'),
  progress: 0
});
