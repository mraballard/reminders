var express = require('express');
var router = express.Router();
var Reminder = require('../models/reminder');

// ROOT

router.get('/', function(req, res){
  var reminders = Reminder.find({}).exec()
  .then(function(reminders){
    res.json({reminders: reminders});
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
    res.json({reminder: reminder});
  })
  .catch(function(err){
    console.log(error);
  });
});

// Update reminder
router.patch('/update', function(req, res){
  Reminder.findOne({_id: req.body.reminder._id}).exec()
  .then(function(reminder){
    reminder.title = req.body.reminder.title;
    reminder.body = req.body.reminder.body;
    reminder.done = req.body.reminder.done;
    reminder.save();
  })
  .then(function(reminder){
    res.json({reminder: reminder});
  })
  .catch(function(err){
    console.log(error);
  });
});

router.delete('/delete/:id', function(req, res) {
  Reminder.remove({_id: req.params.id}).exec()
  .then(function(reminder){
    res.json({reminder: reminder});
  })
  .catch(function(err){
    console.log(err);
  });
});

module.exports = router;
