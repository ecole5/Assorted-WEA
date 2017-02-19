var express = require('express');
var router = express.Router();
var models = require('../models/program');
var gradeModel = require('../models/grade');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});
var parseJSON = bodyParser.json();

router.route('/')
    .post(parseUrlencoded, parseJSON, function (request, response) {
        var program = new models.Programs(request.body.program);
        program.save(function (error) {
            if (error) response.send(error);
            response.json({program: program});
        });
    })
    .get(parseUrlencoded, parseJSON, function (request, response) {
        var Student = request.query.filter;
        if (!Student) {
            models.Programs.find(function (error, Programs) {
                if (error) {response.send(error);}
                else if (Programs[0] == null){
                    response.json({program: Programs});
                }

                else{
                    response.json({program: Programs});}
            });
        } else {
            models.Programs.find({"student": Student.student}, function (error, programs) {
                if (error) response.send(error);
                response.json({program: programs});
            });
        }
    });

router.route('/:program_id')
    .get(parseUrlencoded, parseJSON, function (request, response) {
        models.Programs.findById(request.params.program_id, function (error, program) {
            if (error) response.send(error);
            response.json({program: program});
        })
    })
    .put(parseUrlencoded, parseJSON, function (request, response) {
        models.Programs.findById(request.params.program_id, function (error, program) {
            if (error) {
                response.send({error: error});
            }
            else {
                program.name = request.body.program.name;
                program.level = request.body.program.level;
                program.load = request.body.program.load;
                program.status = request.body.program.status;
                program.term = request.body.program.term;
                program.plan = request.body.program.plan;

                program.save(function (error) {
                    if (error) {
                        response.send({error: error});
                    }
                    else {
                        response.json({program: program});
                    }
                });
            }
        })
    })
     .delete(parseUrlencoded, parseJSON, function (request, response) {
        //When you delete a program you need to make sure that the program in all grades is cleaned
         gradeModel.Grades.find({"program": request.params.program_id}, function (error, grades) {
                if (error) {response.send(error);}
                else{
                    
                for (var i = 0; i < grades.length; i++){
                    
                    grades[i].program = null;
                    grades[i].save();
            }
                }
            });
        //Now actually clean a prgoram
        models.Programs.findByIdAndRemove(request.params.program_id,
            function (error, deleted) {
                if (!error) {
                   
                    response.json({program: deleted});
                }
            }
        );
    });

module.exports = router;
