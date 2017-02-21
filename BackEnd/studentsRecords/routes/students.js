var express = require('express');
var router = express.Router();
var models = require('../models/studentsRecordsDB');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});
var parseJSON = bodyParser.json();

router.route('/')
    .post(parseUrlencoded, parseJSON, function (request, response) {
        var student = new models.Students(request.body.student);
        student.save(function (error) {
            if (error) response.send(error);
            response.json({student: student});
        });
    })
    .get(parseUrlencoded, parseJSON, function (request, response) {
        var l = parseInt(request.query.limit) ;
        var o = parseInt(request.query.offset);
        var Student = request.query.student;
        if (!Student) {

            //models.Students.find(function (error, students) {
            //    if (error) response.send(error);
            //    response.json({student: students});
            //});
            models.Students.paginate({}, { offset: o, limit: l },
                function (error, students) {
                    //if (students.docs.length) {console.log('g')};
                    //console.log(students.docs.length);
                    if (error) {
                        response.send(error)
                    };
                    response.json({student: students.docs});
                });
        } else {

            //        if (Student == "residency")
            models.Students.find({"residency": request.query.residency}, function (error, students) {
                if (error) response.send(error);
                response.json({student: students});
            });
        }
    });


router.route('/find')
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
    })

router.route('/:student_id')
    .get(parseUrlencoded, parseJSON, function (request, response) {
        console.log("1111111111111111111111");
        var StudentID = request.query.stuid;
        models.Students.findById(request.params.student_id, function (error, student) {
        //models.Students.findById(request.params.student_id, function (error, student) {
            
            if (error) {
                response.send({error: error});
            }
            else {
                response.json({student: student});
                console.log(student);
            }
        });
    })
    .put(parseUrlencoded, parseJSON, function (request, response) {
     console.log("----------- Student");
        console.log(request.body);

        models.Students.findById(request.params.student_id, function (error, student) {
            if (error) {
                response.send({error: error});
            }
            else {

                
                student.number = request.body.student.number;
                student.firstName = request.body.student.firstName;
                student.lastName = request.body.student.lastName;
                student.DOB = request.body.student.DOB;
                student.photo = request.body.student.photo;
                student.resInfo = request.body.student.resInfo;

                 student.genInfo = request.body.student.genInfo; 
                student.registrationComments = (request.body.student.registrationComments);
                student.basisOfAdmission = (request.body.student.basisOfAdmission);
                student.admissionAverage = (request.body.student.admissionAverage);
                student.admissionComments = (request.body.student.admissionComments);
                

                student.save(function (error) {
                    if (error) {
                        response.send({error: error});
                    }
                    else {
                        response.json({student: student});
                    }
                });
            }
        });
    })
    .delete(parseUrlencoded, parseJSON, function (request, response) {
        models.Students.findByIdAndRemove(request.params.student_id,
            function (error, deleted) {
                if (!error) {
                    response.json({student: deleted});
                }
            }
        );
    });

module.exports = router;