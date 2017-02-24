var express = require('express');
var router = express.Router();
var models = require('../models/student');
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
        var StudentID = request.query.stuid;
        var StudentFind = request.query.find;
        var getLen = request.query.len;

        if (!Student) {

            //models.Students.find(function (error, students) {
            //    if (error) response.send(error);
            //    response.json({student: students});
            //});
            models.Students.paginate({}, { offset: o, limit: l },
                function (error, students) {
                    //console.log(students);
                    //if (students.docs.length) {console.log('g')};
                    //console.log(students.docs.length);
                    if (error) {
                        response.send(error)
                    };
                    response.json({student: students.docs});
                });
        }else
        {

            if(StudentFind){
                //models.Students.find({},function(student){console.log(student);})
                models.Students.find({"number": request.query.stuid}, function (error, students) {
                 if (error) response.send(error);
                    response.json({student: students});
                 });
            }else if(getLen){
                //cant's send stuff that isn't a model so this doesn't work
                models.Students.find().then(function(students, error){
                    console.log('length: ' + students.length);
                            

                    if (error) response.send(error);
                    response.json({student: students});
                });
            }else{
            //        if (Student == "residency")
            models.Students.find({"residency": request.query.residency}, function (error, students) {
                if (error) response.send(error);
                response.json({student: students});
            });
            }
        }
    });

router.route('/:student_id')
    .get(parseUrlencoded, parseJSON, function (request, response) {
        //var StudentID = request.params.student_id;
        //models.Students.find({number: StudentID}, function (error, student){
        models.Students.findById(request.params.student_id, function (error, student) {
            if (error) {
                response.send({error: error});
            }
            else {
                response.json({student: student[0]});
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
                //I noticed this was missing from mine (scholerhsip info)- could be why it was breaking
                student.scholarshipInfo = request.body.student.scholarshipInfo;
                student.genInfo = request.body.student.genInfo; 
                student.registrationComments = (request.body.student.registrationComments);
                student.basisOfAdmission = (request.body.student.basisOfAdmission);
                student.admissionAverage = (request.body.student.admissionAverage);
                student.admissionComments = (request.body.student.admissionComments);
                student.highSchoolGrades = (request.body.student.highSchoolGrades);
            

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