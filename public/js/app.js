(function(){
  angular.module('reminders', [])
  .controller('mainController', MainController);

  MainController.$inject = ['$http'];

  function MainController($http) {
    var rootUrl = 'http://localhost:3000/';
    var self = this;

  }

})()
console.log('mainController.js');
