'use strict';
angular.module('apps')
  .controller('HomeController', function ($scope, $state) {
    $scope.onSearch = function () {
      $state.go('productList.grid', {criteria: $scope.criteria});
    };
  });
