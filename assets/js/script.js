            var app = angular.module('myAppPhones', []);
            app.controller('phonesCtrl', function ($scope, $http) {
                $http.get("assets/json/phones.json")
                        .then(function (flic) {
                            $scope.phones = flic.data;
                        });
            });