var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var gradeSchema = mongoose.Schema(
    {
        mark: String,
        note: String,
        program: {type: mongoose.Schema.ObjectId, ref: ('Programs')},
        student: {type: mongoose.Schema.ObjectId, ref: ('Students')},
        course: {type: mongoose.Schema.ObjectId, ref: ('Courses')},
        
    }
);

var Grades = mongoose.model('grade', gradeSchema);
module.exports.Grades = Grades;




