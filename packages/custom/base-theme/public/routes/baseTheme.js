'use strict';

angular.module('mean.base-theme').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('baseTheme example page', {
      url: '/baseTheme/example',
      templateUrl: 'base-theme/views/index.html'
    });
  }
]);
