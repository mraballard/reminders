(function(){
  angular.module('reminders')
  .controller('mainController', MainController);

  MainController.$inject = ['$http', '$state'];

  function MainController($http, $state) {
    var self = this;
    self.newReminder = {};

    self.getReminders = function() {
      $http.get('/reminders')
      .then(function(response){
        self.reminders = response.data.reminders;
        console.log(self.reminders);
      })
      .catch(function(err){
        console.log(err);
      });
    } // Close getReminders function

    self.newReminder = function(reminder) {
      $http.post('/reminders/new', {title: reminder.title, body: reminder.body, done: reminder.done})
      .then(function(response){
        console.log(response);
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

    self.getReminders();
  } // close MainController function

})()
console.log('mainController.js');
