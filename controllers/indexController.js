var express = require('express');
var router = express.Router();
var Reminder = require('../models/reminder');

// ROOT

router.get('/', function(req, res){
  console.log("get index route");
  var reminders = Reminder.find({}).exec()
  .then(function(reminders){
    console.log(reminders);
    res.json({eminders: reminders});
  })
  .catch(function(err){
    console.log(error);
  });
});

// Create new reminder
router.post('/new', function(req, res){
  var reminder = Reminder.create({
    title: req.body.title,
    body: req.body.body,
    done: req.body.done
  })
  .then(function(reminder){
    console.log(reminder);
    res.json({reminder: reminder});
  })
  .catch(function(err){
    console.log(error);
  });
});

module.exports = router;
