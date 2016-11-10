var express = require('express');
var router = express.Router();
var Reminder = require('../models/reminder');

// ROOT

router.get('/', function(req, res){
  res.render('/index', {status: 200, message: "welcome home"});
});

module.exports = router;
