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
        var advancedStanding = request.query.student;
        if (!Student) {
            models.AdvInfo.find(function (error, advancedStanding) {
                if (error) response.send(error);
                // returns all scholarships
                response.json({AdvInfo: advancedStanding});
            });
        } else {
          
            models.AdvInfo.find({"student": Student}, function (error, students) {
                if (error) response.send(error);
                response.json({AdvInfo: students});
            });
        }
    })
    
module.exports = router;