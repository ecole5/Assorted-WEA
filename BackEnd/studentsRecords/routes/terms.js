var express = require('express');
var router = express.Router();
var models = require('../models/term');
var gradeModel = require('../models/grade');
var adjudicationModel = require('../models/adjudication');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});
var parseJSON = bodyParser.json();

router.route('/')
    .post(parseUrlencoded, parseJSON, function (request, response) {
        var term = new models.Terms(request.body.term);
        term.save(function (error) {
            if (error) response.send(error);
            response.json({term: term});
        });
    })
    .get(parseUrlencoded, parseJSON, function (request, response) {
        var Student = request.query.filter;
        if (!Student) {
            models.Terms.find(function (error, Terms) {
                if (error) {response.send(error);}
                else if (Terms[0] == null){
                    response.json({term: Terms});
                }

                else{
                    response.json({term: Terms});}
            });
        } else {
            models.Terms.find({"student": Student.student}, function (error, programs) {
                if (error) response.send(error);
                response.json({term: programs});
            });
        }
    });

router.route('/:term_id')
    .get(parseUrlencoded, parseJSON, function (request, response) {
        models.Terms.findById(request.params.term_id, function (error, term) {
            if (error) response.send(error);
            response.json({term: term});
        })
    })
    .put(parseUrlencoded, parseJSON, function (request, response) {
        models.Terms.findById(request.params.term_id, function (error, term) {
            if (error) {
                response.send({error: error});
            }
            else {
                term.name = request.body.term.name;

                term.save(function (error) {
                    if (error) {
                        response.send({error: error});
                    }
                    else {
                        response.json({term: term});
                    }
                });
            }
        })
    })
     .delete(parseUrlencoded, parseJSON, function (request, response) {
             //When you delete a term you need to clean plan from grades
                gradeModel.Grades.find({"term": request.params.term_id}, function (error, grades) {
                if (error) {response.send(error);}
                else{
                    
                for (var i = 0; i < grades.length; i++){
                    grades[i].term = null;
                    grades[i].save();
            }
                }
            });

             //When you delete a term you need to clean it from adjudication
                adjudicationModel.Adjudications.find({"term": request.params.term_id}, function (error, adjudications ) {
                if (error) {response.send(error);}
                else{
                    
                for (var i = 0; i < adjudications.length; i++){
                    adjudications[i].term = null;
                    adjudications[i].save();
            }
                }
            });
        //Now actually clean a gneder
        models.Terms.findByIdAndRemove(request.params.term_id,
            function (error, deleted) {
                if (!error) {
                   
                    response.json({term: deleted});
                }
            }
        );
    });

module.exports = router;
