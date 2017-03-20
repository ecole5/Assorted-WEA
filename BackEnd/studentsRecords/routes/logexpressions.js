var express = require('express');
var router = express.Router();
var models = require('../models/logexpression');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });
var parseJSON = bodyParser.json();

router.route('/')

    //Create New Faculty
    .post(parseUrlencoded, parseJSON, function (request, response) {
        var logexpression = new models.LogExpressions(request.body.logexpression);
        console.log(request.body);
        logexpression.save(function (error) {
            if (error) response.send(error);
            response.json({ logexpression: logexpression });
        });
    })
    //Get all faculties
    .get(parseUrlencoded, parseJSON, function (request, response) {
        models.LogExpressions.find(function (error, LogExpressions) {
            if (error) {
                response.send(error);
            }

            else {
                response.json({ logexpression: LogExpressions });
            }
        });

    });

router.route('/:logexpression_id')
    .get(parseUrlencoded, parseJSON, function (request, response) {
        models.LogExpressions.findById(request.params.logexpression_id, function (error, logexpression) {
            if (error) response.send(error);
            response.json({ logexpression: logexpression });
        })
    })
    .put(parseUrlencoded, parseJSON, function (request, response) {
        models.LogExpressions.findById(request.params.logexpression_id, function (error, logexpression) {
            if (error) {
                response.send({ error: error });
            }
            else {

                logexpression.name = request.body.logexpression.name;
                logexpression.valA = request.body.logexpression.valA;
                logexpression.modelA = request.body.logexpression.modelA;
                logexpression.valB = request.body.logexpression.valB;
                logexpression.modelB = request.body.logexpression.modelB;
                logexpression.opr = request.body.logexpression.opr;
                logexpression.linkBool = request.body.logexpression.linkBool;
                logexpression.link= request.body.logexpression.link;
                
               
                logexpression.save(function (error) {
                    if (error) {
                        response.send({ error: error });
                    }
                    else {
                        response.json({ logexpression: logexpression });
                    }
                });
            }
        })
    })
    .delete(parseUrlencoded, parseJSON, function (request, response) {
    

        //Now actually remove th logexpression
        models.LogExpressions.findByIdAndRemove(request.params.logexpression_id,
            function (error, deleted) {
                if (error) {
                    response.send({ error: error });
                }
                else {
                    response.json({logexpression: deleted });
                }
            }
        );
    });

module.exports = router;

