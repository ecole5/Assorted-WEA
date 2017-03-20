var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var courseSchema = mongoose.Schema(
    {
        courseLetter: String,
        courseNumber: String,
        name: String,
        unit: String,
        
    }
);

var Courses = mongoose.model('course', courseSchema);
module.exports.Courses = Courses;



