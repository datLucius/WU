(function(){
    var app = angular.module('Wutang');

    app.directive("albumDescription", function() {
      return {
        restrict: 'E',
        templateUrl: "./templates/pages/albums/description.html"
      };
    });

    app.directive("albumReviews", function() {
      return {
        restrict: 'E',
        templateUrl: "./templates/pages/albums/reviews.html"
      };
    });

    app.directive("albumSpecs", function() {
      return {
        restrict:"A",
        templateUrl: "./templates/pages/albums/specs.html"
      };
    });

    app.directive("albumTabs", function() {
      return {
        restrict: "E",
        templateUrl: "./templates/pages/albums/tabs.html",
        controller: function() {
          this.tab = 1;

          this.isSet = function(checkTab) {
            return this.tab === checkTab;
          };

          this.setTab = function(activeTab) {
            this.tab = activeTab;
          };
        },
        controllerAs: "tab"
      };
    });

    app.directive("albumGallery", function() {
      return {
        restrict: "E",
        templateUrl: "./templates/pages/albums/gallery.html",
        controller: function() {
          this.current = 0;
          this.setCurrent = function(imageNumber){
            this.current = imageNumber || 0;
          };
        },
        controllerAs: "gallery"
      };
    });
  })();
