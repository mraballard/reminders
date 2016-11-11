(function(){
  angular.module('reminders')
  .controller('mainController', MainController);

  MainController.$inject = ['$http', '$state'];

  function MainController($http, $state) {
    var self = this;
    self.master = {};

    self.resetForm = function() {
      self.newReminder = angular.copy(self.master);
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

    self.newReminder = function(reminder) {
      $http.post('/reminders/new', {title: reminder.title, body: reminder.body, done: reminder.done})
      .then(function(response){
        self.resetForm();
        self.getReminders();
      })
      .catch(function(err){
        console.log(err);
      });
    }

    self.updateReminder = function(reminder) {
      $http.patch('/reminders/update', {reminder: reminder})
      .then(function(response){
        console.log("Should be updated");
        console.log(response);
        self.getReminders();
      })
      .catch(function(err){
        console.log(err);
      });
    }

    self.deleteReminder = function(reminder) {
      console.log(reminder);
      $http.delete(`/reminders/delete/${reminder._id}`, {reminder: reminder})
      .then(function(response){
        console.log(response);
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
