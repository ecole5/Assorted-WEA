var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var studentsSchema = mongoose.Schema(
    {
        number: String,
        firstName: String,
        lastName: String,
        gender: Number,
        DOB: Date,
        photo: String,
        resInfo: {type: mongoose.Schema.ObjectId, ref: 'Residencies'},
        genInfo: {type: mongoose.Schema.ObjectId, ref: 'Genders'},
        

        registrationComments: String,
        basisOfAdmission: String,
        admissionAverage: Number,
        admissionComments: String,
        scholarshipsInfo: [{type:mongoose.Schema.ObjectId, ref: ('Scholarships')}],
        advancedStanding: [{type:mongoose.Schema.ObjectId, ref: ('advancedStanding')}]
    }
);
studentsSchema.plugin(mongoosePaginate);

var residencySchema = mongoose.Schema(
    {
        name: String,
        students: [{type: mongoose.Schema.ObjectId, ref: ('Students')}]
    }
);

var genderSchema = mongoose.Schema(
    {
        name: String,
        students: [{type: mongoose.Schema.ObjectId, ref: ('Students')}]
    }
);

var scholarshipsSchema = mongoose.Schema(
    {
        note: String,
        scholarshipID: String,
        id: String,
        student: {type: mongoose.Schema.ObjectId, ref: 'Students'}
    }
);

var advancedStandingSchema = mongoose.Schema(
    {
        course: String,
        description: String,
        units: Number,
        grade: Number,
        from: String,
        student: {type: mongoose.Schema.ObjectId, ref: ('Students')}
    }
);

var scholarshipsSchema = mongoose.Schema(
    {
        note: String,
        scholarshipID: String,
        id: String,
        student: {type: mongoose.Schema.ObjectId, ref: 'Students'}
    }
);

var Students = mongoose.model('student', studentsSchema);
var Residencies = mongoose.model('residency', residencySchema);
var Genders = mongoose.model('gender', genderSchema);
var Scholarships = mongoose.model('scholarship', scholarshipsSchema);
var AdvancedStandings = mongoose.model('advancedstanding', advancedStandingSchema);

mongoose.connect('mongodb://localhost/studentsRecords');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

    exports.Students = Students;
    exports.Residencies = Residencies;
    exports.Genders = Genders;
    exports.Scholarships =  Scholarships;
    exports.AdvancedStandings = AdvancedStandings;


});



