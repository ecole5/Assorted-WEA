var express = require('express');
var router = express.Router();
var Residencies = require('../models/residencies');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});
var parseJSON = bodyParser.json();

router.route('/')
    .post(parseUrlencoded, parseJSON, function (request, response) {
        var residency = new Residencies.Model(request.body.residency);
        residency.save(function (error) {
            if (error) response.send(error);
            response.json({residency: residency});
        });
    })
    .get(parseUrlencoded, parseJSON, function (request, response) {
        var Student = request.query.filter;
        if (!Student) {
            Residencies.Model.find(function (error, residencies) {
                if (error) response.send(error);
                response.json({residency: residencies});
            });
        } else {
            Residencies.Model.find({"student": Student.student}, function (error, students) {
                if (error) response.send(error);
                response.json({residency: students});
            });
        }
    });

router.route('/:residency_id')
    .get(parseUrlencoded, parseJSON, function (request, response) {
        Residencies.Model.findById(request.params.residency_id, function (error, residency) {
            if (error) response.send(error);
            response.json({residency: residency});
        })
    })
    .put(parseUrlencoded, parseJSON, function (request, response) {
        Residencies.Model.findById(request.params.residency_id, function (error, residency) {
            if (error) {
                response.send({error: error});
            }
            else {
                residency.name = request.body.residency.name;
                residency.students = request.body.residency.students;

                residency.save(function (error) {
                    if (error) {
                        response.send({error: error});
                    }
                    else {
                        response.json({residency: residency});
                    }
                });
            }
        })
    });

module.exports = router;
