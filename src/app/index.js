'use strict';

angular.module('apps', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/home/HomeContent.html',
        controller: 'HomeController'
      })
      .state('productList', {
        url: '/products?criteria',
        abstract: true,
        templateUrl: 'app/productList/ProductListContent.html',
        controller: 'ProductListController'
      })
      .state('productList.grid', {
        url: '',
        views: {
          extracriteria: {template: ''},
          productList: {templateUrl: 'app/productList/grid/ProductListGridContent.html'}
        }
      })
      .state('productList.quickview', {
        url: '/quickview',
        views: {
          extracriteria: {template: ''},
          productList: {templateUrl: 'app/productList/quickview/ProductListQuickViewContent.html'}
        }
      })
      .state('productList.thumbnail', {
        url: '/thumbnail',
        views: {
          extracriteria: {templateUrl: 'app/productList/thumbnail/ProductListThumbnailExtraCriteria.html'},
          productList: {templateUrl: 'app/productList/thumbnail/ProductListThumbnailContent.html'}
        }
      });

    $urlRouterProvider.otherwise('/home');
  });
