(function(){
  angular.module('reminders', [])
  .controller('mainController', MainController);

  MainController.$inject = ['$http'];

  function MainController($http) {
    var self = this;

    self.getReminders = function() {
      $http.get('/reminders')
      .then(function(response){
        console.log(response);
        self.reminders = response.data.reminders;
      })
      .catch(function(err){
        console.log(err);
      });
    } // Close getReminders function

    self.getReminders();
  } // close MainController function

})()
console.log('mainController.js');
