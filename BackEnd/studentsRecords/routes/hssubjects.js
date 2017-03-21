var express = require('express');
var router = express.Router();
var models = require('../models/hssubject');
var HSCoursemodel = require('../models/hscourse');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });
var parseJSON = bodyParser.json();

router.route('/')
    .post(parseUrlencoded, parseJSON, function (request, response) {
        var hssubject = new models.HSsubjects(request.body.hssubject);
        hssubject.save(function (error) {
            if (error) response.send(error);
            response.json({ hssubject: hssubject });
        });
    })
    .get(parseUrlencoded, parseJSON, function (request, response) {
        var Student = request.query.filter;
        if (!Student) {
            models.HSsubjects.find(function (error, HSsubjects) {
                if (error) { response.send(error); }
                else if (HSsubjects[0] == null) {
                    response.json({ hssubject: HSsubjects });
                }

                else {
                    response.json({ hssubject: HSsubjects });
                }
            });
        }
    });

router.route('/:hssubject_id')
    .get(parseUrlencoded, parseJSON, function (request, response) {
        models.HSsubjects.findById(request.params.hssubject_id, function (error, hssubject) {
            if (error) response.send(error);
            response.json({ hssubject: hssubject });
        })
    })
    .put(parseUrlencoded, parseJSON, function (request, response) {
        models.HSsubjects.findById(request.params.hssubject_id, function (error, hssubject) {
            if (error) {
                response.send({ error: error });
            }
            else {

                hssubject.name = request.body.hssubject.name;
                hssubject.courses = request.body.hssubject.courses;
                hssubject.description = request.body.hssubject.description;

                hssubject.save(function (error) {
                    if (error) {
                        response.send({ error: error });
                    }
                    else {
                        response.json({ hssubject: hssubject });
                    }
                });
            }
        })
    })
    .delete(parseUrlencoded, parseJSON, function (request, response) {
        //You need to delete the refrence to the subject in all courses
        HSCoursemodel.HScourses.find({ "subject": request.params.hssubject_id }, function (error, courses) {
            if (error) { response.send(error); }
            else {

                for (var i = 0; i < courses.length; i++) {

                    students[i].subject = null;
                    students[i].save();
                }
            }
        });
        //Now actually delete the subject
        models.HSsubjects.findByIdAndRemove(request.params.hssubject_id,
            function (error, deleted) {
                if (!error) {

                    response.json({ hssubject: deleted });
                }
            }
        );
    });

module.exports = router;
