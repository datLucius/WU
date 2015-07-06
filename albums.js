(function(){
    var app = angular.module('gallery-directives', []);

    app.directive("albumDescription", function() {
      return {
        restrict: 'E',
        templateUrl: "album-description.html"
      };
    });

    app.directive("albumReviews", function() {
      return {
        restrict: 'E',
        templateUrl: "album-reviews.html"
      };
    });

    app.directive("albumSpecs", function() {
      return {
        restrict:"A",
        templateUrl: "album-specs.html"
      };
    });

    app.directive("albumTabs", function() {
      return {
        restrict: "E",
        templateUrl: "album-tabs.html",
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
        templateUrl: "album-gallery.html",
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
