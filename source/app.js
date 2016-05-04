angular.module('optionsAnalyzer', ['ui.router'])
   .config(function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/home/home.html',
      controller: 'HomeCtrl'
    })


    $urlRouterProvider.otherwise('/')
})

console.log(angular.module('optionsAnalyzer'))
