var express = require('express');
var router = express.Router();
var models = require('../models/adjudication');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });
var parseJSON = bodyParser.json();

router.route('/')

    //Create New Rule
    .post(parseUrlencoded, parseJSON, function (request, response) {
        var adjudication = new models.Adjudications(request.body.adjudication);
        console.log(request.body);
        adjudication.save(function (error) {
            if (error) response.send(error);
            response.json({ adjudication: adjudication });
        });
    })

    //Get all adjudications
    .get(parseUrlencoded, parseJSON, function (request, response) {
        models.Adjudications.find(function (error, Adjudications) {
            if (error) {
                response.send(error);
            }

            else {
                response.json({ adjudication: Adjudications });
            }
        });

    });

router.route('/:adjudication_id')
    .get(parseUrlencoded, parseJSON, function (request, response) {
        models.Adjudications.findById(request.params.adjudication_id, function (error, adjudication) {
            if (error) response.send(error);
            response.json({ adjudication: adjudication });
        })
    })
    .put(parseUrlencoded, parseJSON, function (request, response) {
        models.Adjudications.findById(request.params.adjudication_id, function (error, adjudication) {
            if (error) {
                response.send({ error: error });
            }
            else {

                adjudication.date = request.body.adjudication.date;
                adjudication.termAVG = request.body.adjudication.termAVG;
                adjudication.unitPassed = request.body.adjudication.unitPassed;
                adjudication.unitTotal = request.body.adjudication.unitTotal;
                adjudication.note = request.body.adjudication.note;
                adjudication.program = request.body.adjudication.program;
                adjudication.plan = request.body.adjudication.plan;
                adjudication.term = request.body.adjudication.term;
                adjudication.student = request.body.adjudication.student;

                adjudication.save(function (error) {
                    if (error) {
                        response.send({ error: error });
                    }
                    else {
                        response.json({ adjudication: adjudication });
                    }
                });
            }
        })
    })
    .delete(parseUrlencoded, parseJSON, function (request, response) {

        //Now actually remove th adjudication
        models.Adjudications.findByIdAndRemove(request.params.adjudication_id,
            function (error, deleted) {
                if (error) {
                    response.send({ error: error });
                }
                else {
                    response.json({ adjudication: deleted });
                }
            }
        );
    });

module.exports = router;


