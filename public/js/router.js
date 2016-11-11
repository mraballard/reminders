(function() {
  angular.module('reminders', ['ui.router'])
  .config(MainRouter);

  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function MainRouter($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
      .state('reminders', {
        url: "/",
        templateUrl: "reminders.html",
      })
      .state('completed', {
        url: "/completed",
        templateUrl: "complete.html",
      });

      $urlRouterProvider.otherwise('/');
  }

})()

console.log('router.js');
