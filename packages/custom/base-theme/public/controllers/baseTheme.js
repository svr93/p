'use strict';

/* jshint -W098 */
angular.module('mean.base-theme').controller('BaseThemeController', ['$scope', 'Global', 'BaseTheme',
  function($scope, Global, BaseTheme) {
    $scope.global = Global;
    $scope.package = {
      name: 'base-theme'
    };
  }
]);
