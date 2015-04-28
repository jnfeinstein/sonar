require('./cast');
require('./utils');

angular.module('sonar', [
  'cast',
  'navigator',
  'ngRoute',
  'templates',
  'ui.bootstrap'
])

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/cast', {
        templateUrl: 'cast/index.html'
      }).
      when('/find/:userId', {
        templateUrl: 'find/index.html'
      }).
      when('/profile', {
        templateUrl: 'profile/index.html'
      }).
      when('/users', {
        templateUrl: 'user.html'
      }).
      otherwise({
        redirectTo: '/main'
      });
  }])

;
