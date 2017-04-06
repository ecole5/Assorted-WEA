/**
 * Created by Abdelkader on 2017-02-23.
 */
var mongoose = require('mongoose');
var userRoleSchema = mongoose.Schema(
    {
        dateAssigned: Date,
        user: {type: mongoose.Schema.ObjectId, ref: ('Users')},
        role: {type: mongoose.Schema.ObjectId, ref: ('RoleCode')}
    }
);

// switch student to userRoles
var UserRoles = mongoose.model('userRoles', userRoleSchema);
exports.Model = UserRoles;