var gdgApp = angular.module('gdgApp');


gdgApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    $stateProvider
      .state('home', {
            url: '/home',
            templateUrl: 'views/home.html'
        })
             
});