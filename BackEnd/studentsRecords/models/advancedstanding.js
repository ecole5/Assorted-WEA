var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var advancedStandingSchema = mongoose.Schema(
    {
        course: String,
        description: String,
        units: Number,
        grade: Number,
        from: String,
        student: {type: mongoose.Schema.ObjectId, ref: ('Students')},
    }
);

var AdvancedStandings = mongoose.model('advancedstanding', advancedStandingSchema);


   module.exports.AdvancedStandings = AdvancedStandings;






