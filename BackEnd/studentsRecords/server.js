
var express = require('express');
var logger = require('./logger');
var app = express();

var students = require('./routes/students');
var residencies = require('./routes/residencies');
<<<<<<< HEAD
var genders = require('./routes/genders');
=======
var scholarships= require('./routes/scholarships');
>>>>>>> martin


app.use(function (request, response, next) {
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    response.header('Access-Control-Allow-Methods', 'POST, PATCH, GET, PUT, DELETE, OPTIONS');
    next();
});
app.use(logger);
//app.use(express.static('public'));

app.use('/students', students);
app.use('/residencies', residencies);
<<<<<<< HEAD
app.use('/genders', genders);

=======
app.use('/scholarships', scholarships);
>>>>>>> martin

app.listen(3700, function () {
    console.log('Listening on port 3700');
});
