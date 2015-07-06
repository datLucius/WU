(function() {

  angular.module('Wutang').controller('albumGalleryController', function($http){
    var gallery = this;
    gallery.albums = [];
    $http({method: 'GET', url:'wu-albums.json'}).success(function(data){
      gallery.albums = data;
    });
  });

})();
