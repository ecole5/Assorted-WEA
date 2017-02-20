var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var planSchema = mongoose.Schema(
    {
        name: String,
    }
);

var Plans = mongoose.model('plan', planSchema);
module.exports.Plans = Plans;



