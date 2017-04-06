var App = angular.module('App', ['ngRoute']);


App.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
                .when('/computers', {
                    templateUrl: 'assets/partials/computers.html',
                    controller: 'computersCtrl'
                })
                .when('/phones', {
                    templateUrl: 'assets/partials/phones.html',
                    controller: 'phonesCtrl'
                })
                .when('/pads', {
                    templateUrl: 'assets/partials/pads.html',
                    controller: 'padsCtrl'
                })
                .when('/watchs', {
                    templateUrl: 'assets/partials/watchs.html',
                    controller: 'watchsCtrl'
                })
                .otherwise({
                    redirectTo: '/computers'
                });
    }]);

App.controller('indexCtrl', ['$scope', function ($scope) {
        // Configuration de mon contrôleur index

    }]);

App.controller('computersCtrl', ['$scope', '$http', function ($scope, $http) {
        // Configuration de mon contrôleur home
        $http.get('assets/json/computers.json')
                // Si on le récupère avec succès on le stocke dans la variable $scope.computers
                .then(function (res) {
                    $scope.computers = res.data;
                });
    }]);

App.controller('phonesCtrl', ['$scope', '$http', function ($scope, $http) {
        // Configuration de mon contrôleur resume
        $http.get("assets/json/phones.json")
                .then(function (flic) {
                    $scope.phones = flic.data;
                });
    }]);

App.controller('padsCtrl', ['$scope', '$http', function ($scope, $http) {
        // Configuration de mon contrôleur contact
        $http.get("assets/json/pads.json").then(function (res) {
            $scope.tabs = res.data;
        });
    }]);

App.controller('watchsCtrl', ['$scope', '$http', function ($scope, $http) {
        // Configuration de mon contrôleur project
        $http.get('assets/json/watchs.json')
                .then(function (res) {
                    $scope.watchs = res.data;
                });
    }]);
