var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var adjudicationSchema = mongoose.Schema(
    {
        date: Date,
        termAVG: String,
        unitPassed: String,
        unitTotal: String,
        note: String,
        program: {type: mongoose.Schema.ObjectId, ref: ('Programs')},
        plan: {type: mongoose.Schema.ObjectId, ref: ('Plans')},
        term: {type: mongoose.Schema.ObjectId, ref: ('Terms')},
        student: {type: mongoose.Schema.ObjectId, ref: ('Students')},
        
    }
);

var Adjudications = mongoose.model('adjudication', adjudicationSchema);
module.exports.Adjudications = Adjudications;



