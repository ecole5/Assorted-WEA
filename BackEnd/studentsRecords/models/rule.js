var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var ruleSchema = mongoose.Schema(
    {
        name: String,
        logExpression:  {type: mongoose.Schema.ObjectId, ref: ('LogExpressions')},
        plan: {type: mongoose.Schema.ObjectId, ref: ('Plans')},       
        category: {type: mongoose.Schema.ObjectId, ref: ('Categories')},
       
    }
);

var Rules = mongoose.model('rule', ruleSchema);
module.exports.Rules = Rules;



