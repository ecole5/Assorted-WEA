define('students-records/components/manage-system-code', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Component.extend({

        isAddingResidency: false,
        isAddingGender: false,
        ResidencyModel: null, //feed in through outlet in student data entry
        GenderModel: null, //feed in through outlet in student data entry
        currentModel: null,
        store: _ember['default'].inject.service(),

        actions: {
            removeItem: function removeItem(item) {
                item.destroyRecord();
            },

            editItem: function editItem(value) {
                var updatedItem = this.get('currentModel');
                updatedItem.set('name', value);
                updatedItem.save();
            },

            setCurrentModel: function setCurrentModel(model) {
                //this deals with the problem
                this.set('currentModel', model);
            },

            addNewResidency: function addNewResidency() {
                this.set('rName', null);
                this.set('isAddingResidency', true);
            },

            addNewGender: function addNewGender() {
                this.set('gName', null);
                this.set('isAddingGender', true);
            },

            saveResidency: function saveResidency() {
                var myStore = this.get('store');
                var newThing = myStore.createRecord('residency', {
                    name: this.get('rName')
                });
                newThing.save();
                this.set('isAddingResidency', false);
            },

            saveGender: function saveGender() {
                var myStore = this.get('store');
                var newThing = myStore.createRecord('gender', {
                    name: this.get('gName')
                });
                newThing.save();
                this.set('isAddingGender', false);
            },

            cancelNewResidency: function cancelNewResidency() {
                this.set('isAddingResidency', false);
            },
            cancelNewGender: function cancelNewGender() {
                this.set('isAddingGender', false);
            }
        }

    });
});