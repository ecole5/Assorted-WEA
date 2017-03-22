var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var logexpressionSchema = mongoose.Schema(
    {
        name: String,
        valA: String,
        modelA: String,
        valB: String,
        modelB: String,
        opr: String,
        linkBool: Boolean,
        link: {type: mongoose.Schema.ObjectId, ref: ('LogExpressions')},
    }
);

var LogExpressions = mongoose.model('logexpression', logexpressionSchema);
module.exports.LogExpressions = LogExpressions;


