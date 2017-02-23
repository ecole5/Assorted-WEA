var express = require('express');
var router = express.Router();
var models = require('../models/hscourse');
var grademodels = require('../models/hsgrade');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });
var parseJSON = bodyParser.json();

router.route('/')
    .post(parseUrlencoded, parseJSON, function (request, response) {
        var hscourse = new models.HScourses(request.body.hscourse);
        hscourse.save(function (error) {
            if (error) response.send(error);
            response.json({ hscourse: hscourse });
        });
    })
    .get(parseUrlencoded, parseJSON, function (request, response) {
        var Student = request.query.student;
        
        if (!Student) {
            models.HScourses.find(function (error, HScourses) {
                if (error) { response.send(error); }
                else if (HScourses[0] == null) {
                    response.json({ hscourse: HScourses });
                }

                else {
                    response.json({ hscourse: HScourses });
                }
            });
        }
    });

router.route('/:hscourse_id')
    .get(parseUrlencoded, parseJSON, function (request, response) {
        models.HScourses.findById(request.params.hscourse_id, function (error, hscourse) {
            if (error) response.send(error);
            response.json({ hscourse: hscourse });
        })
    })
    .put(parseUrlencoded, parseJSON, function (request, response) {
        models.HScourses.findById(request.params.hscourse_id, function (error, hscourse) {
            if (error) {
                response.send({ error: error });
            }
            else {
                hscourse.level = request.body.hscourse.level;
                hscourse.source = request.body.hscourse.source;
                hscourse.unit = request.body.hscourse.unit;
                hscourse.subject = request.body.hscourse.subject;
                hscourse.school = request.body.hscourse.school;
                hscourse.grades = request.body.hscourse.grades;


                hscourse.save(function (error) {
                    if (error) {
                        response.send({ error: error });
                    }
                    else {
                        response.json({ hscourse: hscourse });
                    }
                });
            }
        })
    })
    .delete(parseUrlencoded, parseJSON, function (request, response) {


     //When you delte a course you need to delete all the marks associated with it   
     grademodels.HSgrades.find({"source": request.params.hscourse_id}, function (error, grades) {
            if (error) {response.send(error);}
            else{
                
            for (var i = 0; i < grades.length; i++){
                students[i].delete();
        }
            }
        });
    
    //Now delete the course
    models.HScourses.findByIdAndRemove(request.params.hscourse_id,
        function (error, deleted) {
            if (!error) {
               
                response.json({hscourse: deleted});
            }
        }
    );
    });

module.exports = router;
