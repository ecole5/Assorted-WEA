var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var facultySchema = mongoose.Schema(
    {
        name: String,      
    }
);

var Faculties = mongoose.model('faculty', facultySchema);
module.exports.Faculties = Faculties;



