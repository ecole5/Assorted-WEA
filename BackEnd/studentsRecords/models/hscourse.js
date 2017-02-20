var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var HScourseSchema = mongoose.Schema(
    {
        level: String,
        source: String,
        unit: String,
        subject: {type: mongoose.Schema.ObjectId, ref: ('HSsubjects')},
        school: {type: mongoose.Schema.ObjectId, ref: ('SecondarySchools')},
        grades: [{type: mongoose.Schema.ObjectId, ref: ('HSgrades')}],
    }
);

var HScourses = mongoose.model('hscourse', HScourseSchema);
module.exports.HScourses = HScourses;



