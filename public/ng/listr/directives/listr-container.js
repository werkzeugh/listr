// Generated by CoffeeScript 1.6.2
angular.module("listr").directive("listrContainer", function() {
  return {
    restrict: "EA",
    replace: true,
    transclude: true,
    scope: {
      src: '@',
      prefix: '@'
    },
    link: function(scope, element, attrs, ctrl, transclude) {
      return transclude(scope, function(clone, scope) {
        return element.append(clone);
      });
    },
    controller: [
      "$scope", "$element", "$attrs", "$timeout", "$filter", "$http", "$q", "statemanager", function($scope, $element, $attrs, $timeout, $filter, $http, $q, statemanager) {
        var listrApiUrl;

        $scope.query = {};
        $scope.items = [
          {
            aaa: 'test'
          }
        ];
        listrApiUrl = $scope.src;
        if (!$scope.prefix) {
          $scope.prefix = 'listr';
        }
        $scope.refreshListing = function() {
          var page;

          if (window.console && console.log) {
            console.log("➜  refreshListing");
          }
          page = $scope.query.page;
          if (page < 0) {
            page = 1;
          }
          return $http.post(listrApiUrl, {
            action: 'getItems',
            prefix: $scope.prefix,
            query: $scope.query,
            page: page
          }).then(function(response) {
            if (window.console && console.log) {
              console.log("rr", response);
            }
            return $scope.items = response.data.items;
          });
        };
        $scope.$watch((function() {
          return statemanager.get("query");
        }), (function(query) {
          if (window.console && console.log) {
            return console.log("listr-container: state-change detected", null);
          }
        }), true);
        return $scope.refreshListing();
      }
    ]
  };
});

if (window.console && console.log) {
  console.log("drectvie defined", null);
}

/*
//@ sourceMappingURL=listr-container.map
*/
