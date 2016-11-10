var express = require('express');
var router = express.Router();
var Reminder = require('../models/reminder');

// ROOT

router.get('/', function(req, res){
  console.log("get index route");
  var reminders = Reminder.find({}).exec()
  .then(function(reminders){
    console.log(reminders);
    res.json({status: 200, reminders: reminders});
  })
  .catch(function(err){
    console.log(error);
  });
});

module.exports = router;
