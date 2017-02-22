var express = require('express');
var router = express.Router();
var models = require('../models/studentsRecordsDB');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});
var parseJSON = bodyParser.json();

//Given a student, find all of their scholarships

router.route('/')
    .post(parseUrlencoded, parseJSON, function (request, response) {
        console.log("--------------------")
        console.log(request.body);
        // I made a JSON object labeled scholarship, this is what the next line is using
        var advanceStanding = new models.AdvancedStandings(request.body.advancestanding);
        advanceStanding.save(function (error) {
            if (error) response.send(error);
            response.json({advancestanding: advanceStanding});
        });
    })
    .get(parseUrlencoded, parseJSON, function (request, response) {
        // I need to grab the scholarships from the given student
        var Student = request.query.student;
        if (!Student) {
            models.AdvancedStandings.find(function (error, advanceStanding) {
                if (error) response.send(error);
                // returns all scholarships
                response.json({advancestanding: advanceStanding});
            });
        } else {
            //{"student": Student},
           // console.log("here");
            models.AdvancedStandings.find({"student": Student}, function (error, students) {
                if (error) response.send(error);
                response.json({advancestanding: students});
            });
        }
    })
    

//Update a scholarship based on it's ID,
// HAS NOT BEEN IMPLEMENTED
router.route('/:advanceStanding_id')
    .put(parseUrlencoded, parseJSON, function (request, response) {
        models.AdvancedStandings.findById(request.params.advanceStanding_id, function (error, advanceStanding) {
            if (error) {
                response.send({error: error});
            }
            else {
                advanceStanding.course = request.body.advancestanding.course;
                advanceStanding.description = request.body.advancestanding.description;
                advanceStanding.units = request.body.advancestanding.units;
                advanceStanding.grade = request.body.advancestanding.grade;
                advanceStanding.from = request.body.advancestanding.from;

                advanceStanding.save(function (error) {
                    if (error) {
                        response.send({error: error});
                    }
                    else {
                        response.json({advancestanding: advanceStanding});
                    }
                });
            }
        });
    })
    .delete(parseUrlencoded, parseJSON, function (request, response) {
        models.AdvancedStandings.findByIdAndRemove(request.params.advanceStanding_id,
            function (error, deleted) {
                if (!error) {
                    response.json({advancestanding: deleted});
                }
            }
        );
    });


module.exports = router;