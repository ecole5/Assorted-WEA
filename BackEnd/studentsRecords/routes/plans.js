var express = require('express');
var router = express.Router();
var models = require('../models/plan');
var programModel = require('../models/program');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});
var parseJSON = bodyParser.json();

router.route('/')
    .post(parseUrlencoded, parseJSON, function (request, response) {
        var plan = new models.Plans(request.body.plan);
        plan.save(function (error) {
            if (error) response.send(error);
            response.json({plan: plan});
        });
    })
    .get(parseUrlencoded, parseJSON, function (request, response) {
        var Student = request.query.filter;
        if (!Student) {
            models.Plans.find(function (error, Plans) {
                if (error) {response.send(error);}
                else if (Plans[0] == null){
                    response.json({plan: Plans});
                }

                else{
                    response.json({plan: Plans});}
            });
        } else {
            models.Plans.find({"student": Student.student}, function (error, programs) {
                if (error) response.send(error);
                response.json({plan: programs});
            });
        }
    });

router.route('/:plan_id')
    .get(parseUrlencoded, parseJSON, function (request, response) {
        models.Plans.findById(request.params.plan_id, function (error, plan) {
            if (error) response.send(error);
            response.json({plan: plan});
        })
    })
    .put(parseUrlencoded, parseJSON, function (request, response) {
        models.Plans.findById(request.params.plan_id, function (error, plan) {
            if (error) {
                response.send({error: error});
            }
            else {
                plan.name = request.body.plan.name;

                plan.save(function (error) {
                    if (error) {
                        response.send({error: error});
                    }
                    else {
                        response.json({plan: plan});
                    }
                });
            }
        })
    })
     .delete(parseUrlencoded, parseJSON, function (request, response) {
        //When you delete a plan you need to make sure that the plan in all programs is cleaned
         programModel.Programs.find({"plan": request.params.plan_id}, function (error, programs) {
                if (error) {response.send(error);}
                else{
                    
                for (var i = 0; i < programs.length; i++){
                    
                    programs[i].plan = null;
                    programs[i].save();
            }
                }
            });
        //Now actually clean a gneder
        models.Plans.findByIdAndRemove(request.params.plan_id,
            function (error, deleted) {
                if (!error) {
                   
                    response.json({plan: deleted});
                }
            }
        );
    });

module.exports = router;
