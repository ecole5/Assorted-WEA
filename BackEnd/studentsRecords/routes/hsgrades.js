var express = require('express');
var router = express.Router();
var models = require('../models/hsgrade');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});
var parseJSON = bodyParser.json();

router.route('/')
    .post(parseUrlencoded, parseJSON, function (request, response) {
        var hsgrade = new models.HSgrades(request.body.hsgrade);
        hsgrade.save(function (error) {
            if (error) response.send(error);
            response.json({hsgrade: hsgrade});
        });
    })
    .get(parseUrlencoded, parseJSON, function (request, response) {
        var Student = request.query.filter;
        if (!Student) {
            models.HSgrades.find(function (error, HSgrades) {
                if (error) {response.send(error);}
                else if (HSgrades[0] == null){
                    response.json({hsgrade: HSgrades});
                }

                else{
                    response.json({hsgrade: HSgrades});}
            });
        } 
    });

router.route('/:hsgrade_id')
    .get(parseUrlencoded, parseJSON, function (request, response) {
        models.HSgrades.findById(request.params.hsgrade_id, function (error, hsgrade) {
            if (error) response.send(error);
            response.json({hsgrade: hsgrade});
        })
    })
    .put(parseUrlencoded, parseJSON, function (request, response) {
        models.HSgrades.findById(request.params.hsgrades_id, function (error, hsgrade) {
            if (error) {
                response.send({error: error});
            }
            else {
                hsgrade.mark = request.body.hsgrade.mark;
                hsgrade.source = request.body.hsgrade.source;

                hsgrade.save(function (error) {
                    if (error) {
                        response.send({error: error});
                    }
                    else {
                        response.json({hsgrade: hsgrade});
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
                   
                    response.json({hsgrade: deleted});
                }
            }
        );
    });

module.exports = router;
