var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var adjcommentSchema = mongoose.Schema(
    {
        comment: {type: mongoose.Schema.ObjectId, ref: ('Comments')},
        adjudication: {type: mongoose.Schema.ObjectId, ref: ('Adjudications')},
       
    }
);

var AdjComments = mongoose.model('adjcomment', adjcommentSchema);
module.exports.AdjComments = AdjComments;



