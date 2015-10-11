'use strict';
angular.module('apps')
  .filter('productFilter', function () {
    return function (products, request) {
      var result = [];

      products.forEach(function (element) {
        if (request.criteria && element.name.indexOf(request.criteria) === -1) {
          return;
        }
        if (request.ll && element.license.indexOf('Logiciel Libre') !== 0){
          return;
        }
        if (request.ml && element.license.indexOf('MIT License') !== 0) {
          return;
        }
        if (request.gpl && element.license.indexOf('GNU General Public License') !== 0) {
          return;
        }
        if (request.casal && element.license.indexOf('Commons Attribution-Share Alike License') !== 0) {
          return;
        }
        if (request.sla && element.license.indexOf('Software Licence Agreement') !== 0) {
          return;
        }
        if (request.multiOs && element.operatingSystem.indexOf('Cross platform') !== 0) {
          return;
        }
        if (request.thumbnail && !element.thumbnail) {
          return;
        }
        result.push(element);
      });

      return result;
    };
  });
