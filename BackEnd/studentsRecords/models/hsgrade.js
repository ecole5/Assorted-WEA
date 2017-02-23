var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var HSgradeSchema = mongoose.Schema(
    {
        mark: Number,
        student: {type: mongoose.Schema.ObjectId, ref: ('Students')},
        source: {type: mongoose.Schema.ObjectId, ref: ('HScourses')},
    }
);

var HSgrades = mongoose.model('hsgrade', HSgradeSchema);
  module.exports.HSgrades = HSgrades;



