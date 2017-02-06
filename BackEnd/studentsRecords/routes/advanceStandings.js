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
        var advancedStanding = new models.AdvancedStandings(request.body.AdvancedStandings);
        advancedStanding.save(function (error) {
            if (error) response.send(error);
            response.json({advancedStanding: advancedStanding});
        });
    })
    .get(parseUrlencoded, parseJSON, function (request, response) {
        // I need to grab the scholarships from the given student
        var Student = request.query.student;
        if (!Student) {
            models.AdvancedStandings.find(function (error, advancedStanding) {
                if (error) response.send(error);
                // returns all scholarships
                response.json({AdvancedStanding: advancedStanding});
            });
        } else {
            //{"student": Student},
            models.AdvancedStandings.find(function (error, advancedStanding) {
                if (error) response.send(error);
                response.json({AdvancedStandings: advancedStanding});
            });
        }
    })
    

//Update a scholarship based on it's ID,
router.route('/:advancedStanding_id')
    .put(parseUrlencoded, parseJSON, function (request, response) {
        models.AdvancedStandings.findById(request.params.advancedStanding_id, function (error, advancedStanding) {
            if (error) {
                response.send({error: error});
            }
            else {
                //advancedStanding is the new object, so save it to that instead
                console.log("The put operation needs to be created");
                //advancedStanding.note = request.body.scholarship.note;
                //scholarship.scholarshipID = request.body.scholarship.scholarshipID;

                advancedStanding.save(function (error) {
                    if (error) {
                        response.send({error: error});
                    }
                    else {
                        response.json({advancedStanding: advancedStanding});
                    }
                });
            }
        });
    })
    .delete(parseUrlencoded, parseJSON, function (request, response) {
        models.AdvancedStandings.findByIdAndRemove(request.params.advancedStanding_id,
            function (error, deleted) {
                if (!error) {
                    response.json({advancedStanding: deleted});
                }
            }
        );
    });


module.exports = router;