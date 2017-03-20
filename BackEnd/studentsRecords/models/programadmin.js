var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var programAdminSchema = mongoose.Schema(
    {
        name: String,
        faculty: {type: mongoose.Schema.ObjectId, ref: ('Faculties')},        
    }
);

var ProgramAdmins = mongoose.model('programAdmin', programAdminSchema);
module.exports.ProgramAdmins = ProgramAdmins;



