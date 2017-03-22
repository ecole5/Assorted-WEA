var express = require('express');
var router = express.Router();
var models = require('../models/plan');
var adjudicationModel = require('../models/adjudication');
var gradeModel = require('../models/grade');
var ruleModel = require('../models/rule');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });
var parseJSON = bodyParser.json();

router.route('/')
    .post(parseUrlencoded, parseJSON, function (request, response) {
        var plan = new models.Plans(request.body.plan);
        plan.save(function (error) {
            if (error) response.send(error);
            response.json({ plan: plan });
        });
    })
    .get(parseUrlencoded, parseJSON, function (request, response) {


            var faculty = request.query.faculty;
            if (faculty){ 
                models.Plans.find({ 'faculty': faculty },function (error, Plans) {
        
                if (error) { 
                    response.send(error); 
                }

                else {
                    response.json({ plan: Plans });
                    
                }
            });
                
        }
        else{
              models.Plans.find(function (error, Plans) {
        
                if (error) { 
                    response.send(error); 
                }

                else {
                    response.json({ plan: Plans });
                    
                }
            });
        }
            
            
            
    });

router.route('/:plan_id')
    .get(parseUrlencoded, parseJSON, function (request, response) {
        models.Plans.findById(request.params.plan_id, function (error, plan) {
            if (error) response.send(error);
            response.json({ plan: plan });
        })
    })
    .put(parseUrlencoded, parseJSON, function (request, response) {
        models.Plans.findById(request.params.plan_id, function (error, plan) {
            if (error) {
                response.send({ error: error });
            }
            else {
                plan.name = request.body.plan.name;
                plan.faculty = request.body.plan.faculty;

                plan.save(function (error) {
                    if (error) {
                        response.send({ error: error });
                    }
                    else {
                        response.json({ plan: plan });
                    }
                });
            }
        })
    })
    .delete(parseUrlencoded, parseJSON, function (request, response) {
        //When you delete a plan you need to make sure that all rules with that plan are deleated
        ruleModel.Rules.find({ "plan": request.params.plan_id }, function (error, rules) {
            if (error) { response.send(error); }
            else {

                for (var i = 0; i < rules.length; i++) {
                    rules[i].delete();
                }
            }
        });
        //When you delete a plan you need to clean plan from grades
        gradeModel.Grades.find({ "plan": request.params.plan_id }, function (error, grades) {
            if (error) { response.send(error); }
            else {

                for (var i = 0; i < grades.length; i++) {
                    grades[i].plan = null;
                    grades[i].save();
                }
            }
        });


        //When you delete a plan you need to clean it from adjudication
        adjudicationModel.Adjudications.find({ "plan": request.params.plan_id }, function (error, adjudications) {
            if (error) { response.send(error); }
            else {

                for (var i = 0; i < adjudications.length; i++) {
                    adjudications[i].plan = null;
                    adjudications[i].save();
                }
            }
        });
        //Now actually remove the plan 
        models.Plans.findByIdAndRemove(request.params.plan_id,
            function (error, deleted) {
                if (!error) {
                    response.json({ plan: deleted });
                }
            }
        );
    });

    

module.exports = router;
