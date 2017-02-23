var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var courseSchema = mongoose.Schema(
    {
        courseLetter: String,
        courseNumber: String,
        name: String,
        unit: String,
        //grades: [{type: mongoose.Schema.ObjectId, ref: ('Grades')}],
        //programs: [{type: mongoose.Schema.ObjectId, ref: ('Programs')}], //do we really need the back refrence?, its always going to be empty
        
    }
);

var Courses = mongoose.model('course', courseSchema);
module.exports.Courses = Courses;



