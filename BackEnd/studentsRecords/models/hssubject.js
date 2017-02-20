var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var HSsubjectSchema = mongoose.Schema(
    {
       name:String,
       description:String,
        courses: [{type: mongoose.Schema.ObjectId, ref: ('HScourses')}],
    }
);

var HSsubjects = mongoose.model('hssubject', HSsubjectSchema);
module.exports.HSsubjects = HSsubjects;



