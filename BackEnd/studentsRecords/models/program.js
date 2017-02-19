var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var programSchema = mongoose.Schema(
    {
        name: String,
        level: Number,
        load: String,
        status: String,
        term: {type: mongoose.Schema.ObjectId, ref: ('Terms')},
        plan: {type: mongoose.Schema.ObjectId, ref: ('Plans')},
    }
);

var Programs = mongoose.model('program', programSchema);
  module.exports.Programs = Programs;




