var gdgApp = angular.module('gdgApp', ['ui.router']);


gdgApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    $stateProvider
      .state('home', {
            url: '/home',
            templateUrl: 'views/home.html'
        })
      .state('about',{
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutController'
      })

});


gdgApp.controller('AboutController',
  function($scope){
    $scope.drinks = ['Coffee', 'Milk', 'Tea'];
  }
);