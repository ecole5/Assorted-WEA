var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var ruleSchema = mongoose.Schema(
    {
        name: String,
        plan: {type: mongoose.Schema.ObjectId, ref: ('Plans')},       
        category: {type: mongoose.Schema.ObjectId, ref: ('Categories')},
        log: String,
       
    }
);

var Rules = mongoose.model('rule', ruleSchema);
module.exports.Rules = Rules;



