
var express = require('express');
var logger = require('./logger');
var app = express();
var mongoose = require('mongoose');

var students = require('./routes/students');
var residencies = require('./routes/residencies');
var genders = require('./routes/genders');
var scholarships= require('./routes/scholarships');
var advanceStandings = require('./routes/advanceStandings');
var hsgrades = require('./routes/hsgrades');
var hssubjects = require('./routes/hssubjects');
var hscourses = require('./routes/hscourses');
var secondaryschools = require('./routes/secondaryschools');
var grades = require('./routes/grades');
var programs = require('./routes/programs');
var plans = require('./routes/plans');
var terms = require('./routes/terms');
var courses = require('./routes/courses');
var rules = require('./routes/rules');
var faculties = require('./routes/faculties');
var categorys = require('./routes/categories');
var logexpressions = require('./routes/logexpressions');
var programadmins = require('./routes/programadmins');
var adjudications = require('./routes/adjudications');
var reports = require('./routes/reports');




app.use(function (request, response, next) {
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    response.header('Access-Control-Allow-Methods', 'POST, PATCH, GET, PUT, DELETE, OPTIONS');
    next();
});
app.use(logger);
//app.use(express.static('public'));

mongoose.connect('mongodb://localhost/studentsRecords');
var db = mongoose.connection;


app.use('/students', students);
app.use('/residencies', residencies);
app.use('/genders', genders);
app.use('/scholarships', scholarships);
app.use('/advanceStandings', advanceStandings);
app.use('/hsgrades', hsgrades);
app.use('/hssubjects', hssubjects);
app.use('/hscourses', hscourses);
app.use('/secondaryschools', secondaryschools);
app.use('/grades', grades);
app.use('/terms', terms);
app.use('/plans', plans);
app.use('/courses', courses);
app.use('/programs', programs);
app.use('/rules', rules);
app.use('/faculties', faculties);
app.use('/logexpressions', logexpressions);
app.use('/categories', categorys);
app.use('/programadmins', programadmins);
app.use('/adjudications', adjudications);
app.use('/reports', reports);



app.listen(3700, function () {
    console.log('Listening on port 3700');
});

module.exports = app; 
