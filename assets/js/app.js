/* Déclaration du module avec ngRoute qui permet d'aller sur la bonne page html / tableau json  
en fonction du produit choisi */
var App = angular.module('App', ['ngRoute'])
        .run(function ($rootScope) {
                    /* Déclaration d'un $rootScope.carts = [] qui a une valeur pour l'ensemble 
                     du site pour notre panier  */          
                    $rootScope.carts = [];
        });

/* Déclaration des différentes routes càd les chemins pour ouvrir la bonne page html 
en fonction des page ouvertes par le client */
        
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
                /* Si mauvaise information demandée retour à la page computers qui pour notre 
                site est la page d'accueil */                
                .otherwise({
                    redirectTo: '/computers'
                });
    }]);

// Déclaration des différents controleurs nécessaire au site :

// Index
App.controller('indexCtrl', ['$scope', function ($scope) {
        // Configuration de mon contrôleur index : fonction du bouton supprimer UN seul élément
        $scope.remove = function ($index) {
          $scope.carts.splice(this.$index, 1);
      };
        // Configuration de mon controleur addQuantity

    }]);
// Computers
App.controller('computersCtrl', ['$scope', '$http', function ($scope, $http) {
        // Configuration de mon contrôleur home
        $http.get('assets/json/computers.json')
                // Si on le récupère avec succès on le stocke dans la variable $scope.computers
                .then(function (res) {
                    $scope.computers = res.data;
                });
        /* Fonction qui envoie les informations de l'article dans un nouveau tableau qui est global 
         à déclarer pour chaque type d'articles */
        $scope.addCart = function () {
            $scope.carts.push({
                name: this.computer.nom,
                img: this.computer.image,
                price: this.computer.prix
            });
        };
    }]);
// Phones
App.controller('phonesCtrl', ['$scope', '$http', function ($scope, $http) {
        // Configuration de mon contrôleur resume
        $http.get("assets/json/phones.json")
                .then(function (flic) {
                    $scope.phones = flic.data;
                });
        /* Fonction qui envoie les informations de l'article dans un nouveau tableau qui est global
         pour que ces infos soit envoyer dans le panier lors du shopping client */
        $scope.addCart = function () {
            $scope.carts.push({
                name: this.phone.nom,
                img: this.phone.image,
                price: this.phone.prix
            });
        };
    }]);
// Pads
App.controller('padsCtrl', ['$scope', '$http', function ($scope, $http) {
        // Configuration de mon contrôleur contact
        $http.get("assets/json/pads.json")
                .then(function (res) {
                    $scope.tabs = res.data;
                });
        // Fonction qui envoie les informations de l'article dans un nouveau tableau qui est global
        $scope.addCart = function () {
            $scope.carts.push({
                name: this.data.nom,
                img: this.data.image,
                price: this.data.prix
            });
        };
    }]);
// Watchs
App.controller('watchsCtrl', ['$scope', '$http', function ($scope, $http) {
        // Configuration de mon contrôleur project
        $http.get('assets/json/watchs.json')
                .then(function (res) {
                    $scope.watchs = res.data;
                });
        // Fonction qui envoie les informations de l'article dans un nouveau tableau qui est global
        $scope.addCart = function () {
            $scope.carts.push({
                name: this.watch.nom,
                img: this.watch.image,
                price: this.watch.prix
            });
        };
    }]);
