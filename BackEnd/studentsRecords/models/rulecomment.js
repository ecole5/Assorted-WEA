var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var rulecommentSchema = mongoose.Schema(
    {
        comment: {type: mongoose.Schema.ObjectId, ref: ('Comments')},
        rule: {type: mongoose.Schema.ObjectId, ref: ('Rules')},
       
    }
);

var RuleComments = mongoose.model('rulecomment', rulecommentSchema);
module.exports.RuleComments = RuleComments;



