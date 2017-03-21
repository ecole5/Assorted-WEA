var express = require('express');
var router = express.Router();
var models = require('../models/adjcomment');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });
var parseJSON = bodyParser.json();

router.route('/')

    //Create New Rule
    .post(parseUrlencoded, parseJSON, function (request, response) {
        var adjcomment = new models.AdjComments(request.body.adjcomment);
        console.log(request.body);
        adjcomment.save(function (error) {
            if (error) response.send(error);
            response.json({ adjcomment: adjcomment });
        });
    })

    //Get all adjcomments
    .get(parseUrlencoded, parseJSON, function (request, response) {
        models.AdjComments.find(function (error, AdjComments) {
            if (error) {
                response.send(error);
            }

            else {
                response.json({ adjcomment: AdjComments });
            }
        });

    });

router.route('/:adjcomment_id')
    .get(parseUrlencoded, parseJSON, function (request, response) {
        models.AdjComments.findById(request.params.adjcomment_id, function (error, adjcomment) {
            if (error) response.send(error);
            response.json({ adjcomment: adjcomment });
        })
    })
    .put(parseUrlencoded, parseJSON, function (request, response) {
        models.AdjComments.findById(request.params.adjcomment_id, function (error, adjcomment) {
            if (error) {
                response.send({ error: error });
            }
            else {

                adjcomment.comment = request.body.adjcomment.comment;
                adjcomment.adjudication = request.body.adjcomment.adjudication;
               

                adjcomment.save(function (error) {
                    if (error) {
                        response.send({ error: error });
                    }
                    else {
                        response.json({ adjcomment: adjcomment });
                    }
                });
            }
        })
    })
    .delete(parseUrlencoded, parseJSON, function (request, response) {
        
        //Now actually remove th adjcomment
        models.AdjComments.findByIdAndRemove(request.params.adjcomment_id,
            function (error, deleted) {
                if (error) {
                    response.send({ error: error });
                }
                else {
                    response.json({ adjcomment: deleted });
                }
            }
        );
    });

module.exports = router;

