var express = require('express');
var router = express.Router();
var models = require('../models/category');
var ruleModel = require('../models/rule');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });
var parseJSON = bodyParser.json();

router.route('/')

    //Create New Faculty
    .post(parseUrlencoded, parseJSON, function (request, response) {
        var category = new models.Categories(request.body.category);
        console.log(request.body);
        category.save(function (error) {
            if (error) response.send(error);
            response.json({ category: category });
        });
    })

    //Get all faculties
    .get(parseUrlencoded, parseJSON, function (request, response) {
        var faculty = request.query.faculty;
        if (faculty) {
            models.Categories.find({ 'faculty': faculty }, function (error, Categories) {
                if (error) {
                    response.send(error);
                }

                else {
                    response.json({ category: Categories });
                }
            });
        }
        else {
            models.Categories.find(function (error, Categories) {
                if (error) {
                    response.send(error);
                }

                else {
                    response.json({ category: Categories });
                }
            });

        }

    });

router.route('/:category_id')
    .get(parseUrlencoded, parseJSON, function (request, response) {
        models.Categories.findById(request.params.category_id, function (error, category) {
            if (error) response.send(error);
            response.json({ category: category });
        })
    })
    .put(parseUrlencoded, parseJSON, function (request, response) {
        models.Categories.findById(request.params.category_id, function (error, category) {
            if (error) {
                response.send({ error: error });
            }
            else {

                category.name = request.body.category.name;
                category.evalOrder = request.body.category.evalOrder;
                category.allRules = request.body.category.allRules;
                category.independent = request.body.category.independent;
                category.faculty = request.body.category.faculty;
               


                category.save(function (error) {
                    if (error) {
                        response.send({ error: error });
                    }
                    else {
                        response.json({ category: category });
                    }
                });
            }
        })
    })
    .delete(parseUrlencoded, parseJSON, function (request, response) {
        //Delete all rules with refrence to this category
        ruleModel.Rules.find({ "category": request.params.category_id }, function (error, rules) {
            if (error) { response.send(error); }
            else {

                for (var i = 0; i < rules.length; i++) {
                    rules[i].delete();
                }
            }
        });
        //Now actually remove the category
        models.Categories.findByIdAndRemove(request.params.category_id,
            function (error, deleted) {
                if (error) {
                    response.send({ error: error });
                }
                else {
                    response.json({ category: deleted });
                }
            }
        );
    });

module.exports = router;

