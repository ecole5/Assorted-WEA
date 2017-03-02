var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var studentsSchema = mongoose.Schema(
    {
        number: Number,
        firstName: String,
        lastName: String,
        DOB: Date,
        photo: String,
        resInfo: {type: mongoose.Schema.ObjectId, ref: 'Residencies'},
        genInfo: {type: mongoose.Schema.ObjectId, ref: 'Genders'},
        registrationComments: String,
        basisOfAdmission: String,
        admissionAverage: Number,
        admissionComments: String,
        scholarshipsInfo: [{type:mongoose.Schema.ObjectId, ref: ('Scholarships')}],
        advancedStanding: [{type:mongoose.Schema.ObjectId, ref: ('advancedStanding')}],
        highSchoolGrades: [{type:mongoose.Schema.ObjectId, ref: ('HSgrades')}],
    

    }
);
studentsSchema.plugin(mongoosePaginate);

var Students = mongoose.model('student', studentsSchema);

    module.exports.Students = Students;




