var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var scholarshipsSchema = mongoose.Schema(
    {
        note: String,
        scholarshipID: String,
        id: String,
        student: {type: mongoose.Schema.ObjectId, ref: ('Students')},
    }
);

var Scholarships = mongoose.model('scholarship', scholarshipsSchema);
module.exports.Scholarships =  Scholarships;



