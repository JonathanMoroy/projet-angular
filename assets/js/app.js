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

App.controller('computersCtrl', ['$scope', function ($scope) {
        // Configuration de mon contrôleur home
    }]);

App.controller('phonesCtrl', ['$scope', function ($scope) {
        // Configuration de mon contrôleur resume
    }]);

App.controller('padsCtrl', ['$scope', function ($scope) {
        // Configuration de mon contrôleur contact
    }]);

App.controller('watchsCtrl', ['$scope', '$http', function ($scope, $http) {
        // Configuration de mon contrôleur project
        $http.get('assets/json/watchs.json')
            .then(function (res) {
                $scope.watchs = res.data;
            });
    }]);
