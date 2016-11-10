var express = require('express');
var app = express();
var mongoose = require('mongoose');
var logger = require('morgan');
var bodyParser = require('body-parser');

// model
var Reminder = require('./models/reminder');
// controller
var indexController = require('./controllers/indexController');
// mongoose setup
mongoose.Promise = global.Promise;
var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/reminders';
mongoose.connect(mongoURI);


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));


app.use('/', indexController);

// database
var db = mongoose.connection;
db.on('error', function(err) {console.log(err);});
db.once('open', function(){console.log('Connected to Mongo database');});


app.listen(process.env.PORT || 3000);
