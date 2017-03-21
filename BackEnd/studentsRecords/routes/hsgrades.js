var express = require('express');
var router = express.Router();
var models = require('../models/hsgrade');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });
var parseJSON = bodyParser.json();

router.route('/')
    .post(parseUrlencoded, parseJSON, function (request, response) {
        var hsgrade = new models.HSgrades(request.body.hsgrade);
        hsgrade.save(function (error) {
            if (error) response.send(error);
            response.json({ hsgrade: hsgrade });
        });
    })
    .get(parseUrlencoded, parseJSON, function (request, response) {
        console.log("Get for hsgrades no params");
        var Student = request.query.student;
        if (!Student) {
            console.log("Get for hsgrades no params no student");
            models.HSgrades.find(function (error, HSgrades) {
                if (error) { response.send(error); }
                else if (HSgrades[0] == null) {
                    response.json({ hsgrade: HSgrades });
                }

                else {
                    response.json({ hsgrade: HSgrades });
                }
            });
        } else {
            console.log("Get for hsgrades no params found student");
            models.HSgrades.find({ "student": Student }, function (error, programs) {
                if (error) response.send(error);
                response.json({ hsgrade: programs });
            });
        }
    });

router.route('/:hsgrade_id')
    .get(parseUrlencoded, parseJSON, function (request, response) {
        models.HSgrades.findById(request.params.hsgrade_id, function (error, hsgrade) {
            console.log(hsgrade);
            console.log("above");
            if (error) response.send(error);
            response.json({ hsgrade: hsgrade });
        })
    })
    .put(parseUrlencoded, parseJSON, function (request, response) {

        models.HSgrades.findById(request.params.hsgrade_id, function (error, hsgrade) {
            if (error) {
                response.send({ error: error });
            }
            else {
                hsgrade.mark = request.body.hsgrade.mark;
                hsgrade.student = request.body.hsgrade.student;
                hsgrade.source = request.body.hsgrade.source;

                hsgrade.save(function (error) {
                    if (error) {
                        response.send({ error: error });
                    }
                    else {
                        response.json({ hsgrade: hsgrade });
                    }
                });
            }
        })
    })
    .delete(parseUrlencoded, parseJSON, function (request, response) {
        //Everything has a many realtionship to this, thus no need to delete for ember
        models.HSgrades.findByIdAndRemove(request.params.hsgrade_id,
            function (error, deleted) {
                if (!error) {

                    response.json({ hsgrade: deleted });
                }
            }
        );
    });

module.exports = router;
