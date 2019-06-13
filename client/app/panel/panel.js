'use strict';

angular.module('roompapaApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/panel', {
        template: '<panel></panel>'
      });
  });
