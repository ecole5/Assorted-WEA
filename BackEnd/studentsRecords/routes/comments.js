var express = require('express');
var router = express.Router();
var models = require('../models/comment');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });
var parseJSON = bodyParser.json();

router.route('/')

    //Create New Rule
    .post(parseUrlencoded, parseJSON, function (request, response) {
        var comment = new models.Comments(request.body.comment);
        console.log(request.body);
        comment.save(function (error) {
            if (error) response.send(error);
            response.json({ comment: comment });
        });
    })

    //Get all comments
    .get(parseUrlencoded, parseJSON, function (request, response) {
        models.Comments.find(function (error, Comments) {
            if (error) {
                response.send(error);
            }

            else {
                response.json({ comment: Comments });
            }
        });

    });

router.route('/:comment_id')
    .get(parseUrlencoded, parseJSON, function (request, response) {
        models.Comments.findById(request.params.comment_id, function (error, comment) {
            if (error) response.send(error);
            response.json({ comment: comment });
        })
    })
    .put(parseUrlencoded, parseJSON, function (request, response) {
        models.Comments.findById(request.params.comment_id, function (error, comment) {
            if (error) {
                response.send({ error: error });
            }
            else {

                comment.code = request.body.comment.code;
                comment.description = request.body.comment.description;
               



                comment.save(function (error) {
                    if (error) {
                        response.send({ error: error });
                    }
                    else {
                        response.json({ comment: comment });
                    }
                });
            }
        })
    })
    .delete(parseUrlencoded, parseJSON, function (request, response) {
        
        //Now actually remove th comment
        models.Comments.findByIdAndRemove(request.params.comment_id,
            function (error, deleted) {
                if (error) {
                    response.send({ error: error });
                }
                else {
                    response.json({ comment: deleted });
                }
            }
        );
    });

module.exports = router;