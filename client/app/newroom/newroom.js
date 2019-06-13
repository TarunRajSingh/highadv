'use strict';

angular.module('roompapaApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/newroom', {
        template: '<newroom></newroom>'
      });
  });
