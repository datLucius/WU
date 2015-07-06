(function(){
    var app = angular.module('Wutang');

    app.directive("navigateTabs", function() {
      return {
        restrict: "E",
        templateUrl: "navigate-tabs.html",
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

  })();
