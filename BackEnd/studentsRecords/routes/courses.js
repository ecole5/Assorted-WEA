var express = require('express');
var router = express.Router();
var models = require('../models/course');
var gradeModel = require('../models/grade');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});
var parseJSON = bodyParser.json();

router.route('/')
    .post(parseUrlencoded, parseJSON, function (request, response) {
        var course = new models.Courses(request.body.course);
        console.log(course);
        course.save(function (error) {
            if (error) response.send(error);
            response.json({course: course});
        });
    })
    .get(parseUrlencoded, parseJSON, function (request, response) {
        var Student = request.query.filter;
        if (!Student) {
            models.Courses.find(function (error, Courses) {
                if (error) {response.send(error);}
                else if (Courses[0] == null){
                    response.json({course: Courses});
                }

                else{
                    response.json({course: Courses});}
            });
        } else {
            models.Courses.find({"student": Student.student}, function (error, Courses) {
                if (error) response.send(error);
                response.json({course: Courses});
            });
        }
    });

router.route('/:course_id')
    .get(parseUrlencoded, parseJSON, function (request, response) {
        models.Courses.findById(request.params.course_id, function (error, course) {
            if (error) response.send(error);
            response.json({course: course});
        })
    })
    .put(parseUrlencoded, parseJSON, function (request, response) {
        models.Courses.findById(request.params.course_id, function (error, course) {
            if (error) {
                response.send({error: error});
            }
            else {
                // What is going on over here?
                console.log(course);
                course.courseLetter = request.body.course.courseLetter;
                course.courseNumber = request.body.course.courseNumber;
                course.name = request.body.course.name;
                course.unit = request.body.course.unit;
                console.log(course);
                /*
                    courseLetter: String,
        courseNumber: Number,
        name: String,
        unit: String,
                */

                course.save(function (error) {
                    if (error) {
                        response.send({error: error});
                    }
                    else {
                        response.json({course: course});
                    }
                });
            }
        })
    })
     .delete(parseUrlencoded, parseJSON, function (request, response) {
        //When you delete a course you need to make sure that the refrence from grade is cleaned up
         gradeModel.Grades.find({"course": request.params.course_id}, function (error, grades) {
                if (error) {response.send(error);}
                else{
                    
                for (var i = 0; i < grades.length; i++){
                    
                    grades[i].course = null;
                    grades[i].save();
            }
                }
            });
        //Now actually clean a gneder
        models.Courses.findByIdAndRemove(request.params.course_id,
            function (error, deleted) {
                if (!error) {
                   
                    response.json({course: deleted});
                }
            }
        );
    });

module.exports = router;
