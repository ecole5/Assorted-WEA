var express = require('express');
var router = express.Router();
var models = require('../models/studentsRecordsDB');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});
var parseJSON = bodyParser.json();

//ember doesn't like custom endpoints on get requests, so I have made this route to represent student/find
router.route('/')
.get(parseUrlencoded, parseJSON, function (request, response) {
        console.log("1111111111111111111111");
        var StudentID = request.query.stuid;
        models.Students.find({number: StudentID}, function (error, student){
        //models.Students.findById(request.params.student_id, function (error, student) {
            
            if (error) {
                response.send({error: error});
            }
            else {
                response.json({student: student});
                console.log(student);
            }
        });
    });

  
module.exports = router;