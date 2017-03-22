var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var categorySchema = mongoose.Schema(
    {
        name: String,
        allRules: Boolean, //indicate weither to evaluate all rules or evalulate rules in order within category
        independent: Boolean, //Evalualte categoery indpedently or in order
        faculty: {type: mongoose.Schema.ObjectId, ref: ('Faculties')}, 
       
    }
);

var Categories = mongoose.model('category', categorySchema);
module.exports.Categories = Categories;



