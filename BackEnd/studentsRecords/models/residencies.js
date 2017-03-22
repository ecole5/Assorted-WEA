/**
 * Created by Abdelkader on 2017-02-23.
 */
var mongoose = require('mongoose');
var residenciesSchema = mongoose.Schema(
    {
        title: String,
        body: String,
        comments: [{type: mongoose.Schema.ObjectId, ref: 'Comments'}]
    }
);

var Residencies = mongoose.model('residency', residenciesSchema);
exports.Model = Residencies;