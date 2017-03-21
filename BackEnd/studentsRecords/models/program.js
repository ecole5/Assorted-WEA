var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var programSchema = mongoose.Schema(
    {
        name: String,
        level: String,
        load: String,
        status: String,
    }
);

var Programs = mongoose.model('program', programSchema);
  module.exports.Programs = Programs;




