var express = require('express');
var router = express.Router();
var models = require('../models/term');
var programModel = require('../models/program');
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
        //When you delete a term you need to make sure that the term in all programs is cleaned
         programModel.Programs.find({"term": request.params.term_id}, function (error, programs) {
                if (error) {response.send(error);}
                else{
                    
                for (var i = 0; i < programs.length; i++){
                    
                    programs[i].term = null;
                    programs[i].save();
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
