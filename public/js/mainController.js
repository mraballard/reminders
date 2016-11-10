(function(){
  angular.module('reminders')
  .controller('mainController', MainController)

  mainController.$inject = [$http, $state];

  function mainController($http, $state) {
    var rootUrl = 'http://localhost:3000/';
    var self = this;

  }

})()
