var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');


var residencySchema = mongoose.Schema(
    {
        name: String,
        students: [{type: mongoose.Schema.ObjectId, ref: ('Students')}],
    }
);

var Residencies = mongoose.model('residency', residencySchema);
module.exports.Residencies = Residencies;

