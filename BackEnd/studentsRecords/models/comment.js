var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var commentSchema = mongoose.Schema(
    {
        code: String,
        description: String,

    }
);

var Comments = mongoose.model('comment', commentSchema);
module.exports.Comments = Comments;



