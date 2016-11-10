(function(){
  angular.module('reminders')
  .controller('mainController', MainController);

  MainController.$inject = ['$http', '$state'];

  function MainController($http, $state) {
    var self = this;
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
      console.log(reminder);
    }

    self.getReminders();
  } // close MainController function

})()
console.log('mainController.js');
