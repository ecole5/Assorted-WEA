var express = require('express');
var router = express.Router();
var models = require('../models/programadmin');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });
var parseJSON = bodyParser.json();

router.route('/')

    //Create New Rule
    .post(parseUrlencoded, parseJSON, function (request, response) {
        var programadmin = new models.ProgramAdmins(request.body.programadmin);
        console.log(request.body);
        programadmin.save(function (error) {
            if (error) response.send(error);
            response.json({ programadmin: programadmin });
        });
    })

    //Get all programadmins
    .get(parseUrlencoded, parseJSON, function (request, response) {
        models.ProgramAdmins.find(function (error, ProgramAdmins) {
            if (error) {
                response.send(error);
            }

            else {
                response.json({ programadmin: ProgramAdmins });
            }
        });

    });

router.route('/:programadmin_id')
    .get(parseUrlencoded, parseJSON, function (request, response) {
        models.ProgramAdmins.findById(request.params.programadmin_id, function (error, programadmin) {
            if (error) response.send(error);
            response.json({ programadmin: programadmin });
        })
    })
    .put(parseUrlencoded, parseJSON, function (request, response) {
        models.ProgramAdmins.findById(request.params.programadmin_id, function (error, programadmin) {
            if (error) {
                response.send({ error: error });
            }
            else {

                programadmin.name = request.body.programadmin.name;
                programadmin.faculty = request.body.programadmin.faculty;

                programadmin.save(function (error) {
                    if (error) {
                        response.send({ error: error });
                    }
                    else {
                        response.json({ programadmin: programadmin });
                    }
                });
            }
        })
    })
    .delete(parseUrlencoded, parseJSON, function (request, response) {

        //Now actually remove th programadmin
        models.ProgramAdmins.findByIdAndRemove(request.params.programadmin_id,
            function (error, deleted) {
                if (error) {
                    response.send({ error: error });
                }
                else {
                    response.json({ programadmin: deleted });
                }
            }
        );
    });

module.exports = router;


