'use strict';

angular.module('appApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('MenuApp-Admin/#/menu', {
        templateUrl: 'views/menu.html',
        controller: 'MainCtrl'
      })
      .when('MenuApp-Admin/#/categories', {
        templateUrl: 'views/categories.html',
        controller: 'MainCtrl'
      })
      .when('/MenuApp-Admin/#/orders', {
        templateUrl: 'views/orders.html',
        controller: 'OrdersCtrl'
      })
      .otherwise({
        redirectTo: '/MenuApp-Admin/#/menu'
      });
  })

 .run(function($rootScope, $location, $http) {
  // Here be global functions and variables
  $rootScope.$on('$routeChangeSuccess', function () {
    $rootScope.myPage = $location.path().substring($location.path().indexOf('/', 1)).replace('/','');
  });
});
