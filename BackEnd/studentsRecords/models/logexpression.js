var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var logexpressionSchema = mongoose.Schema(
    {
        expression: String
    }
);

var LogExpressions = mongoose.model('logexpression', logexpressionSchema);
module.exports.LogExpressions = LogExpressions;



