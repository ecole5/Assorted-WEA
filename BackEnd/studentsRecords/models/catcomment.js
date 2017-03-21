var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var catcommentSchema = mongoose.Schema(
    {
        comment: {type: mongoose.Schema.ObjectId, ref: ('Comments')},
        category: {type: mongoose.Schema.ObjectId, ref: ('Categories')},
       
    }
);

var CatComments = mongoose.model('catcomment', catcommentSchema);
module.exports.CatComments = CatComments;



