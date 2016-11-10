(function() {
  angular.module('reminders', ['ui-router'])
  .config(MainRouter)

  MainRouter.$inject = ["$stateProvider", "$urlRouterProvider"];

  function MainRouter($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('index', {
        url: '/',
        templateURL: '../../views/index.html'
      });
  }

})()

console.log(router.js);
