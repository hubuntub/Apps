'use strict';
angular.module('apps')
  .filter('photoFilter', function () {
    return function (photoUrl) {
      return photoUrl || 'assets/images/call-start.png';
    };
  });
