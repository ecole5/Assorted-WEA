var express = require('express');
var router = express.Router();
var models = require('../models/catcomment');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });
var parseJSON = bodyParser.json();

router.route('/')

    //Create New Rule
    .post(parseUrlencoded, parseJSON, function (request, response) {
        var catcomment = new models.CatComments(request.body.catcomment);
        console.log(request.body);
        catcomment.save(function (error) {
            if (error) response.send(error);
            response.json({ catcomment: catcomment });
        });
    })

    //Get all catcomments
    .get(parseUrlencoded, parseJSON, function (request, response) {
        models.CatComments.find(function (error, CatComments) {
            if (error) {
                response.send(error);
            }

            else {
                response.json({ catcomment: CatComments });
            }
        });

    });

router.route('/:catcomment_id')
    .get(parseUrlencoded, parseJSON, function (request, response) {
        models.CatComments.findById(request.params.catcomment_id, function (error, catcomment) {
            if (error) response.send(error);
            response.json({ catcomment: catcomment });
        })
    })
    .put(parseUrlencoded, parseJSON, function (request, response) {
        models.CatComments.findById(request.params.catcomment_id, function (error, catcomment) {
            if (error) {
                response.send({ error: error });
            }
            else {

                catcomment.comment = request.body.catcomment.comment;
                catcomment.category = request.body.catcomment.category;
               



                catcomment.save(function (error) {
                    if (error) {
                        response.send({ error: error });
                    }
                    else {
                        response.json({ catcomment: catcomment });
                    }
                });
            }
        })
    })
    .delete(parseUrlencoded, parseJSON, function (request, response) {
        
        //Now actually remove th catcomment
        models.CatComments.findByIdAndRemove(request.params.catcomment_id,
            function (error, deleted) {
                if (error) {
                    response.send({ error: error });
                }
                else {
                    response.json({ catcomment: deleted });
                }
            }
        );
    });

module.exports = router;

