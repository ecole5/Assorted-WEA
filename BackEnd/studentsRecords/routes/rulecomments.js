var express = require('express');
var router = express.Router();
var models = require('../models/rulecomment');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });
var parseJSON = bodyParser.json();

router.route('/')

    //Create New Rule
    .post(parseUrlencoded, parseJSON, function (request, response) {
        var rulecomment = new models.RuleComments(request.body.rulecomment);
        console.log(request.body);
        rulecomment.save(function (error) {
            if (error) response.send(error);
            response.json({ rulecomment: rulecomment });
        });
    })

    //Get all rulecomments
    .get(parseUrlencoded, parseJSON, function (request, response) {
        models.RuleComments.find(function (error, RuleComments) {
            if (error) {
                response.send(error);
            }

            else {
                response.json({ rulecomment: RuleComments });
            }
        });

    });

router.route('/:rulecomment_id')
    .get(parseUrlencoded, parseJSON, function (request, response) {
        models.RuleComments.findById(request.params.rulecomment_id, function (error, rulecomment) {
            if (error) response.send(error);
            response.json({ rulecomment: rulecomment });
        })
    })
    .put(parseUrlencoded, parseJSON, function (request, response) {
        models.RuleComments.findById(request.params.rulecomment_id, function (error, rulecomment) {
            if (error) {
                response.send({ error: error });
            }
            else {

                rulecomment.comment = request.body.rulecomment.comment;
                rulecomment.rule = request.body.rulecomment.rule;
               



                rulecomment.save(function (error) {
                    if (error) {
                        response.send({ error: error });
                    }
                    else {
                        response.json({ rulecomment: rulecomment });
                    }
                });
            }
        })
    })
    .delete(parseUrlencoded, parseJSON, function (request, response) {
        
        //Now actually remove th rulecomment
        models.RuleComments.findByIdAndRemove(request.params.rulecomment_id,
            function (error, deleted) {
                if (error) {
                    response.send({ error: error });
                }
                else {
                    response.json({ rulecomment: deleted });
                }
            }
        );
    });

module.exports = router;

