var express = require('express');
var router = express.Router();
var models = require('../models/faculty');
var planModel = require('../models/plan');
var programadminModel = require('../models/programadmin');
var categoryModel = require('../models/category');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });
var parseJSON = bodyParser.json();

router.route('/')

    //Create New Faculty
    .post(parseUrlencoded, parseJSON, function (request, response) {
        var faculty = new models.Faculties(request.body.faculty);
        console.log(request.body);
        faculty.save(function (error) {
            if (error) response.send(error);
            response.json({ faculty: faculty });
        });
    })

    //Get all faculties
    .get(parseUrlencoded, parseJSON, function (request, response) {
        models.Faculties.find(function (error, Faculties) {
            if (error) {
                response.send(error);
            }

            else {
                response.json({ faculty: Faculties });
            }
        });

    });

router.route('/:faculty_id')
    .get(parseUrlencoded, parseJSON, function (request, response) {
        models.Faculties.findById(request.params.faculty_id, function (error, faculty) {
            if (error) response.send(error);
            response.json({ faculty: faculty });
        })
    })
    .put(parseUrlencoded, parseJSON, function (request, response) {
        models.Faculties.findById(request.params.faculty_id, function (error, faculty) {
            if (error) {
                response.send({ error: error });
            }
            else {

                faculty.name = request.body.faculty.name;

                faculty.save(function (error) {
                    if (error) {
                        response.send({ error: error });
                    }
                    else {
                        response.json({ faculty: faculty });
                    }
                });
            }
        })
    })
    .delete(parseUrlencoded, parseJSON, function (request, response) {
        //When you delete a faculty you need to make sure that the faculty in all plans is cleaned
        planModel.Plans.find({ "faculty": request.params.faculty_id }, function (error, plans) {
            if (error) { response.send(error); }
            else {

                for (var i = 0; i < plans.length; i++) {
                    plans[i].faculty = null;
                    plans[i].save();
                }
            }
        });

        categoryModel.Categories.find({ "faculty": request.params.faculty_id }, function (error, categories) {
            if (error) { response.send(error); }
            else {

                for (var i = 0; i < categories.length; i++) {
                    categroies[i].delete(); //Do we need to do the rule delete here
                }
            }
        });

        programadminModel.ProgramAdmins.find({ "faculty": request.params.faculty_id }, function (error, programadmins) {
            if (error) { response.send(error); }
            else {

                for (var i = 0; i < programadmins.length; i++) {
                    programadmins[i].faculty = null;
                    programadmins[i].save();
                }
            }
        });

        //Now actually remove th faculty
        models.Faculties.findByIdAndRemove(request.params.faculty_id,
            function (error, deleted) {
                if (error) {
                    response.send({ error: error });
                }
                else {
                    response.json({ faculty: deleted });
                }
            }
        );
    });

module.exports = router;

