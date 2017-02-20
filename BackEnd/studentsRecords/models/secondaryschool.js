var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var SecondarySchoolSchema = mongoose.Schema(
    {
        name: String,
        courses: [{type: mongoose.Schema.ObjectId, ref: ('HScourses')}],
    }
);

var SecondarySchools = mongoose.model('secondaryschool', SecondarySchoolSchema);

module.exports.SecondarySchools = SecondarySchools;



