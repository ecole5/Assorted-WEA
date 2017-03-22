var express = require('express');
var router = express.Router();
var models = require('../models/gender');
var studentModel = require('../models/student');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });
var parseJSON = bodyParser.json();

router.route('/')
    .post(parseUrlencoded, parseJSON, function (request, response) {
        var gender = new models.Genders(request.body.gender);
        gender.save(function (error) {
            if (error) response.send(error);
            response.json({ gender: gender });
        });
    })
    .get(parseUrlencoded, parseJSON, function (request, response) {
        var Student = request.query.filter;
        if (!Student) {
            models.Genders.find(function (error, Genders) {
                if (error) { response.send(error); }
                else if (Genders[0] == null) {
                    response.json({ gender: Genders });
                }

                else {
                    response.json({ gender: Genders });
                }
            });
        } else {
            models.Genders.find({ "student": Student.student }, function (error, students) {
                if (error) response.send(error);
                response.json({ gender: students });
            });
        }
    });

router.route('/:gender_id')
    .get(parseUrlencoded, parseJSON, function (request, response) {
        models.Genders.findById(request.params.gender_id, function (error, gender) {
            if (error) response.send(error);
            response.json({ gender: gender });
        })
    })
    .put(parseUrlencoded, parseJSON, function (request, response) {
        models.Genders.findById(request.params.gender_id, function (error, gender) {
            if (error) {
                response.send({ error: error });
            }
            else {
                gender.name = request.body.gender.name;
                gender.students = request.body.gender.students;

                gender.save(function (error) {
                    if (error) {
                        response.send({ error: error });
                    }
                    else {
                        response.json({ gender: gender });
                    }
                });
            }
        })
    })
    .delete(parseUrlencoded, parseJSON, function (request, response) {
        //When you delete a gender you need to make sure that the genInfo in all students is cleaned
        studentModel.Students.find({ "genInfo": request.params.gender_id }, function (error, students) {
            if (error) { response.send(error); }
            else {

                for (var i = 0; i < students.length; i++) {

                    students[i].genInfo = null;
                    students[i].save();
                }
            }
        });
        //Now actually clean a gneder
        models.Genders.findByIdAndRemove(request.params.gender_id,
            function (error, deleted) {
                if (!error) {

                    response.json({ gender: deleted });
                }
            }
        );
    });

module.exports = router;
