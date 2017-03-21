import Ember from 'ember';

export default Ember.Component.extend({

  store: Ember.inject.service(),
  notDONE: null, //tied to the appropriate show boolean in select-code
  subjectModel: null,
  schoolModel: null,
  codeModel: null,
  currentModel: null,


  init() {
    this._super(...arguments);
    // get all documents of type modelName

    var self = this;
    this.get('store').findAll('hssubject').then(function (records) {
      self.set('subjectModel', records);
    });
    this.get('store').findAll('secondaryschool').then(function (records) {
      self.set('schoolModel', records);
    });

    this.get('store').findAll('hscourse').then(function (records) {
      self.set('codeModel', records);

    });

  },



  actions: {

    //Removes a code option
    removeCode(item) {
      item.destroyRecord();
    },

    selectSchool(value) {
      var model = this.get('currentModel');
      var school = this.get('store').peekRecord('secondaryschool', value);
      model.set('school', school);
      model.save();
    },

    selectSubject(value) {
      var model = this.get('currentModel');
      var subject = this.get('store').peekRecord('hssubject', value);
      model.set('subject', subject);
      model.save();
    },

    editLevel(value) {
      var model = this.get('currentModel');
      model.set('level', value);
      model.save();
    },

    editSource(value) {
      var model = this.get('currentModel');
      model.set('source', value);
      model.save();
    },

    editUnit(value) {
      var model = this.get('currentModel');
      model.set('unit', value);
      model.save();

    },

    setCurrentModel(model) {
      var interval = 50;
      Ember.run.later(this, function () {
        this.set('currentModel', model);
      }, interval);

    },

    //Create new document
    newCode() {
      var myStore = this.get('store');
      var newCode = myStore.createRecord("hscourse", {
        level: "NEW LEVEL",
        source: "NEW SOURCE",
        unit: "NEW UNIT",
        subject: null,
        school: null,
      });
      newCode.save();

    },

    //finish editing and close the modal
    exit: function () {
      this.set('notDONE', false); //component control in select-code
      Ember.$('.ui.modal').modal('hide');
      Ember.$('.ui.modal').remove(); //fixes layering problem

    },
  },

  didRender() { //run on startup
    Ember.$('.ui.modal')
      .modal({
        closable: false, //cant click out 
      })
      .modal('show');

  },
});

