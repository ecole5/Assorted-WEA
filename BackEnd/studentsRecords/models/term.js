var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var termSchema = mongoose.Schema(
    {
        name: String,
    }
);

var Terms = mongoose.model('term', termSchema);
module.exports.Terms = Terms;
  


