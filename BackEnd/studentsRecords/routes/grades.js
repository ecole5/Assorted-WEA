var express = require('express');
var router = express.Router();
var models = require('../models/grade');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});
var parseJSON = bodyParser.json();

router.route('/')
    .post(parseUrlencoded, parseJSON, function (request, response) {
        var grade = new models.Grades(request.body.grade);
        grade.save(function (error) {
            if (error) response.send(error);
            response.json({grade: grade});
        });
    })
    .get(parseUrlencoded, parseJSON, function (request, response) {
        var Student = request.query.student;
        if (!Student) {
            console.log("no student");
            models.Grades.find(function (error, Grades) {
                if (error) {response.send(error);}
                else if (Grades[0] == null){
                    response.json({grade: Grades});
                }

                else{
                    response.json({grade: Grades});}
            });
        } else {
            console.log("found student");
            models.Grades.find({"student": Student}, function (error, programs) {
                if (error) response.send(error);
                response.json({grade: programs});
            });
        }
    });

router.route('/:grade_id')
    .get(parseUrlencoded, parseJSON, function (request, response) {
        models.Grades.findById(request.params.grade_id, function (error, grade) {
            if (error) response.send(error);
            response.json({grade: grade});
        })
    })
    .put(parseUrlencoded, parseJSON, function (request, response) {
        models.Grades.findById(request.params.grade_id, function (error, grade) {
            if (error) {
                response.send({error: error});
            }
            else {
                grade.mark = request.body.grade.mark;
                grade.note =  request.body.grade.note;
                grade.program =  request.body.grade.program;
                grade.plan =  request.body.grade.plan;
                grade.plan =  request.body.grade.term;
                grade.student =  request.body.grade.student;
                grade.course = request.body.grade.course;

                grade.save(function (error) {
                    if (error) {
                        response.send({error: error});
                    }
                    else {
                        response.json({grade: grade});
                    }
                });
            }
        })
    })
     .delete(parseUrlencoded, parseJSON, function (request, response) {
    
        //Now actually clean a grade
        models.Grades.findByIdAndRemove(request.params.grade_id,
            function (error, deleted) {
                if (!error) {
                   
                    response.json({grade: deleted});
                }
            }
        );
    });

module.exports = router;
