var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var reportSchema = mongoose.Schema(
    {
        //reportID: String,
        students: [{type: mongoose.Schema.ObjectId, ref: ('student')}],
    }
);

var Reports = mongoose.model('report', reportschema);
  module.exports.Reports = Reports;



