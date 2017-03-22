var express = require('express');
var router = express.Router();
var models = require('../models/rule');
var logexpressionModel = require('../models/logexpression');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });
var parseJSON = bodyParser.json();

router.route('/')

    //Create New Rule
    .post(parseUrlencoded, parseJSON, function (request, response) {
        var rule = new models.Rules(request.body.rule);
        console.log(request.body);
        rule.save(function (error) {
            if (error) response.send(error);
            response.json({ rule: rule });
        });
    })

    //Get all rules
    .get(parseUrlencoded, parseJSON, function (request, response) {
        models.Rules.find(function (error, Rules) {
            if (error) {
                response.send(error);
            }

            else {
                response.json({ rule: Rules });
            }
        });

    });

router.route('/:rule_id')
    .get(parseUrlencoded, parseJSON, function (request, response) {
        models.Rules.findById(request.params.rule_id, function (error, rule) {
            if (error) response.send(error);
            response.json({ rule: rule });
        })
    })
    .put(parseUrlencoded, parseJSON, function (request, response) {
        models.Rules.findById(request.params.rule_id, function (error, rule) {
            if (error) {
                response.send({ error: error });
            }
            else {

                rule.name = request.body.rule.name;
                rule.logExpression = request.body.rule.logExpression;
                rule.plan = request.body.rule.plan;
                rule.category = request.body.rule.category;
           

                rule.save(function (error) {
                    if (error) {
                        response.send({ error: error });
                    }
                    else {
                        response.json({ rule: rule });
                    }
                });
            }
        })
    })
    .delete(parseUrlencoded, parseJSON, function (request, response) {
        //When you delete the chain of linked boolean expressions
        removeBoolean(request.body.rule.logExpression);

        //Now actually remove th rule
        models.Rules.findByIdAndRemove(request.params.rule_id,
            function (error, deleted) {
                if (error) {
                    response.send({ error: error });
                }
                else {
                    response.json({ rule: deleted });
                }
            }
        );
    });

module.exports = router;


//Recursive delete for linked Boolean
function removeBoolean(expID) {
    logexpressionModel.LogExpressions.findById(expID, function (error, logExpr) {

        if (logExpr.link != null) {
            removeBoolean(link);
        }

        models.Rules.findByIdAndRemove(request.params.rule_id, function (error, deleted) {
            if (error) {
                response.send({ error: error });
            }
            else {
                response.json({ logExpression: deleted });
            }
        });
    });
}
