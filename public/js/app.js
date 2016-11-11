(function(){
  angular.module('reminders')
  .controller('mainController', MainController);

  MainController.$inject = ['$http', '$state'];

  function MainController($http, $state) {
    var self = this;
    self.newReminder = null;

    self.resetForm = function() {
      self.newReminder = null;
      console.log(self.newReminder);
    }

    self.setReminders = function() {
      self.completed = self.reminders.filter(function(reminder) {
        return reminder.done === true;
      });
      self.incomplete = self.reminders.filter(function(reminder) {
        return reminder.done === false;
      });
    }

    self.getReminders = function() {
      $http.get('/reminders')
      .then(function(response){
        self.reminders = response.data.reminders;
        self.setReminders(); // Creates arrays of completed reminders
      })
      .catch(function(err){
        console.log(err);
      });
    } // Close getReminders function

    self.createReminder = function(reminder) {
      // if (reminder) {
        $http.post('/reminders/new', {title: reminder.title, body: reminder.body, done: reminder.done})
        .then(function(response){
          self.resetForm();
          self.getReminders();
        })
        .catch(function(err){
          console.log(err);
        });
      // }
    }

    self.updateReminder = function(reminder) {
      $http.patch('/reminders/update', {reminder: reminder})
      .then(function(response){
        self.getReminders();
      })
      .catch(function(err){
        console.log(err);
      });
    }

    self.deleteReminder = function(reminder) {
      $http.delete(`/reminders/delete/${reminder._id}`, {reminder: reminder})
      .then(function(response){
        self.getReminders();
      })
      .catch(function(err){
        console.log(err);
      })
    }

    self.getReminders();
  } // close MainController function

})()
console.log('mainController.js');
