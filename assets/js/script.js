var app = angular.module("app", []);
    app.controller('myCtrl', ['$scope', '$http', function ($scope, $http) {
      $http.get("assets/json/pads.json").then(function(toto) {
        $scope.tabs = toto.data;
      });
    }])
