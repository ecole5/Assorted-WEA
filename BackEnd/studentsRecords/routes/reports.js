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
        var excel = request.query.excel;
        //var download = request.query.download;
        if(Criteria==="Faculty"){
            console.log('1');
            models.adjcomment.find({"adjudication":{"term":{"name":term}}},{"adjudication":{"student":{"number":1,"firstName":1,"lastName":1},"program":{"name":1},"plan":{"faculty":{"name":1}}},"comment":{"code":1}}).sort({"adjudication":{"plan":{"faculty":1}}}).then( function(error, reports){            
                //this is the format change so it sends EXACTLY what is needed for the report
                /*if(download){
                    var json2xls = require('json2xls');
                    //replace json with response from find
                    var json = {
                        foo: 'bar',
                        qux: 'moo',
                        poo: 123,
                    }

                    var xls = json2xls(json);

                    fs.writeFileSync('data.xlsx', xls, 'binary');
                }*/
                //else{
                    if (error) response.send(error);
                    console.log(reports);
                      response.json(reports);
                //}
            });
        }
        else if(Criteria==="Program"){
            console.log('2');
             models.adjcomment.find({"adjudication":{"term":{"name":term}}},{"adjudication":{"student":{"number":1,"firstName":1,"lastName":1},"program":{"name":1},"plan":{"faculty":{"name":1}}},"comment":{"code":1}}).sort({"program":1}).then( function(error, reports){
                /*if(download){
                    var json2xls = require('json2xls');
                    //replace json with response from find
                    var json = {
                        foo: 'bar',
                        qux: 'moo',
                        poo: 123,
                    }

                    var xls = json2xls(json);

                    fs.writeFileSync('data.xlsx', xls, 'binary');
                }*/
                //else{
                    if (error) response.send(error);
                    console.log(reports);
                      response.json(reports);
                //}
            });
        }
        else {

        } 

    });




module.exports = router;