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
        var advancedStanding = new models.advancedStanding(request.body.advancedStanding);
        advancedStanding.save(function (error) {
            if (error) response.send(error);
            response.json({advancedStanding: advancedStanding});
        });
    })
    .get(parseUrlencoded, parseJSON, function (request, response) {
        // I need to grab the scholarships from the given student
        var Student = request.query.student;
        if (!Student) {
            models.AdvInfo.find(function (error, advancedStanding) {
                if (error) response.send(error);
                // returns all scholarships
                response.json({AdvInfo: advancedStanding});
            });
        } else {
            //{"student": Student},
            models.AdvInfo.find({"student": Student}, function (error, students) {
                if (error) response.send(error);
                response.json({AdvInfo: students});
            });
        }
    })
    

//Update a scholarship based on it's ID,
// HAS NOT BEEN IMPLEMENTED
router.route('/:scholarship_id')
    .put(parseUrlencoded, parseJSON, function (request, response) {
        models.Scholarships.findById(request.params.scholarship_id, function (error, scholarship) {
            if (error) {
                response.send({error: error});
            }
            else {
                scholarship.note = request.body.scholarship.note;
                scholarship.scholarshipID = request.body.scholarship.scholarshipID;

                scholarship.save(function (error) {
                    if (error) {
                        response.send({error: error});
                    }
                    else {
                        response.json({scholarship: scholarship});
                    }
                });
            }
        });
    })
    .delete(parseUrlencoded, parseJSON, function (request, response) {
        models.Scholarships.findByIdAndRemove(request.params.scholarship_id,
            function (error, deleted) {
                if (!error) {
                    response.json({scholarship: deleted});
                }
            }
        );
    });


module.exports = router;