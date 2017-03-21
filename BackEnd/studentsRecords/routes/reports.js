var express = require('express');
var router = express.Router();
var models = require('../models/report');
var studentModel = require('../models/student');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });
var parseJSON = bodyParser.json();

router.route('/')
    /*.post(parseUrlencoded, parseJSON, function (request, response) {
        var secondaryschool = new models.SecondarySchools(request.body.secondaryschool);
        secondaryschool.save(function (error) {
            if (error) response.send(error);
            response.json({secondaryschool: secondaryschool});
        });
    })*/
    .get(parseUrlencoded, parseJSON, function (request, response) {
        var Criteria = request.query.criteria;
        var term = request.query.term;
        if(Criteria==="faculty"){
            models.adjudication.find({"term":term}).sort({"plan":{"faculty":1}}).then( function(error, reports){
                
                //this is the format change so it sends EXACTLY what is needed for the report
                if (error) response.send(error);
                 console.log(reports);
                    response.json(reports);
//,"plan":{"faculty":Criteria}
            });
        }
        else if(Criteria==="program"){
            models.adjudication.find({"term":term,}).sort({"program":1}).then( function(error, reports){
                if (error) response.send(error);
                 console.log(reports);
                    response.json(reports);


            });
        }
        else {

        }

        //var Student = request.query.filter;
        /*if (!Student) {
            models.SecondarySchools.find(function (error, SecondarySchools) {
                if (error) {response.send(error);}
                else if (SecondarySchools[0] == null){
                    response.json({secondaryschool: SecondarySchools});
                }

                else{
                    response.json({secondaryschool: SecondarySchools});}
            });
        }*/
    });

/*router.route('/:secondaryschool_id')
    .get(parseUrlencoded, parseJSON, function (request, response) {
        models.SecondarySchools.findById(request.params.secondaryschool_id, function (error, secondaryschool) {
            if (error) response.send(error);
            response.json({secondaryschool: secondaryschool});
        })
    })
    .put(parseUrlencoded, parseJSON, function (request, response) {
        models.SecondarySchools.findById(request.params.secondaryschool_id, function (error, secondaryschool) {
            if (error) {
                response.send({error: error});
            }
            else {
                
                secondaryschool.name = request.body.secondaryschool.name;
                secondaryschool.courses = request.body.secondaryschool.courses;

                secondaryschool.save(function (error) {
                    if (error) {
                        response.send({error: error});
                    }
                    else {
                        response.json({secondaryschool: secondaryschool});
                    }
                });
            }
        })
    })
     .delete(parseUrlencoded, parseJSON, function (request, response) {
           //New to clean refrences to the school in courses
           HSCoursemodel.HScourses.find({"school": request.params.secondaryschool_id}, function (error, courses) {
                if (error) {response.send(error);}
                else{
                    
                for (var i = 0; i < courses.length; i++){
                    
                    students[i].school = null;
                    students[i].save();
            }
                }
            });
        //Now actually delete the course
        models.SecondarySchools.findByIdAndRemove(request.params.secondaryschool_id,
            function (error, deleted) {
                if (!error) {
                   
                    response.json({secondaryschool: deleted});
                }
            }
        );
    });
*/

module.exports = router;