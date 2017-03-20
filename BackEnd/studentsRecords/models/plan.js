var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var planSchema = mongoose.Schema(
    {
        name: String,
        faculty: {type: mongoose.Schema.ObjectId, ref: ('Faculties')},
    }
);

var Plans = mongoose.model('plan', planSchema);
module.exports.Plans = Plans;



