var express = require('express');
var app = express();
var mongoose = require('mongoose');
var logger = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');

// model
var Reminder = require('./models/reminder');
// Seed database
// Reminder.create({
//   title: "Personal",
//   description: "Go grocery shopping",
//   done: false
// })
// Reminder.create({
//   title: "Personal",
//   description: "Wash the car",
//   done: false
// })
// Reminder.create({
//   title: "Work",
//   description: "Finish presentation",
//   done: false
// })
// Reminder.create({
//   title: "Personal",
//   description: "Wash dog",
//   done: false
// })
// Reminder.create({
//   title: "Work",
//   description: "Email spreadsheet to team",
//   done: false
// })

// controller
var indexController = require('./controllers/indexController');
// mongoose setup
mongoose.Promise = global.Promise;
var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/reminders';
mongoose.connect(mongoURI);


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));


app.use('/reminders', indexController);

// database
var db = mongoose.connection;
db.on('error', function(err) {console.log(err);});
db.once('open', function(){console.log('Connected to Mongo database');});

//Routing
app.use(function(req, res, next){
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, function(){
  console.log("=============================");
  console.log("SERVER LISTENING ON PORT 4000");
  console.log("=============================");
});
