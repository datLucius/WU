(function() {
  'use strict'
  angular.module('Wutang', ['ngRoute'])
  .config(function($routeProvider){
    $routeProvider
    .when('/albums', {
      templateUrl: './templates/pages/albums/view.html',
      controller: 'albumGalleryController',
      controllerAs: 'albumGallery'
    })

    .when('/syllabi', {
      templateUrl: './templates/pages/syllabi/view.html'
    })

    .when('/', {
      templateUrl: './templates/pages/albums/view.html'
    })

    .otherwise({ redirectTo: '/'});
  });
})();
