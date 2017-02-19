var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var genderSchema = mongoose.Schema(
    {
        name: String,
        students: [{type: mongoose.Schema.ObjectId, ref: ('Students')}],
    }
);

var Genders = mongoose.model('gender', genderSchema);
module.exports.Genders = Genders;

