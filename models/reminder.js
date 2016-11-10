var mongoose = require('mongoose');

var ReminderSchema = new mongoose.Schema({
  title: String,
  body: String,
  done: Boolean,
  createdAt: String,
  updatedAt: String
});

ReminderSchema.pre('save', function(next) {
  now = new Date();
  this.updatedAt = now.toLocaleString();
  if (!this.createdAt) {
    this.createdAt = now.toLocaleString();
  }
  next();
});

module.exports = mongoose.model('Reminder', ReminderSchema);
