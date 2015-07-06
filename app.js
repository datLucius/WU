(function() {var app = angular.module('wuAlbums', ['gallery-directives']);

  app.controller('galleryController', ['$http', function($http){
    var gallery = this;
    gallery.albums = [];
    $http.get('./wu-albums.json').success(function(data){
      gallery.albums = data;
    });
  }]);

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(album) {
      album.reviews.push(this.review);

      this.review = {};
    };
  });
})();
