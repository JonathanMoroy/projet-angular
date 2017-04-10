var App = angular.module('App', ['ngRoute'])
        .run(function ($rootScope) {
            $rootScope.carts = [];
            // Merci @Coco :D
            $rootScope.total = function () { //sur la valeur total
                var total = 0;
                for (var i = 0; i < $rootScope.carts.length; i++) { //on lance une boucle qui itère la longueure du tableau items
                    total += ($rootScope.carts[i].quantity * $rootScope.carts[i].price);  //ensuite, la variable total concatène (+=) la multiplication de la quantité du tableau items via l'indice i et le prix du tableau items via l'indice i
                }
                ;
                return total; //on retourne la variable total après notre fonction pour qu'elle soit disponible
            };
        });


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

App.controller('indexCtrl', ['$scope', '$http', function ($scope, $http) {
        // Configuration de mon contrôleur index
        $scope.remove = function ($index) {
            $scope.carts.splice(this.$index, 1);
        };
        // Configuration Regex
        $scope.username = {
            regex: /^[A-z- \\áàâäãçéèêëíìîïñóòôöõúùûüÁÀÂÄÇÉÈÊËÍÌÎÏÓÒÔÖÚÙÛÜ\s]{1,90}$/
        };
        $scope.email = {
            regex: /^[\w\-\.]+[a-z0-9]@[\w\-\.]+[a-z0-9]\.[a-z]{2,}$/
        };
        $scope.someText = {
            regex: /^[\d\D]{1,}$/,
            model: 'Entrez votre texte'
        };
        // Configuration de l'inscription
        $scope.envoie_donnee = function () {
            var data = {
                nom: $scope.nom,
                prenom: $scope.prenom,
                date_de_naissance: $scope.birthday,
                adresse_e_mail: $scope.e_mail,
                mot_de_passe: $scope.password
            };
            var config = {
                headers: {
                    'Content-Type': 'assets/json/inscription;'
                }
            };
            $http.post('assets/json/inscription', data)
                    .then(function (data) {
                        $scope.inscription = data.data;
                    })
                    .error(function (data, status, header, config) {
                        $scope.ResponseDetails = "Data: " + data +
                                "<hr />status: " + status +
                                "<hr />headers: " + header +
                                "<hr />config: " + config;
                    });
        };
    }]);

App.controller('computersCtrl', ['$scope', '$http', function ($scope, $http) {
        // Configuration de mon contrôleur home
        $http.get('assets/json/computers.json')
                // Si on le récupère avec succès on le stocke dans la variable $scope.computers
                .then(function (res) {
                    $scope.computers = res.data;
                });
        // Fonction qui envoie les informations de l'article dans un nouveau tableau qui est global
        $scope.addCart = function () {
            $scope.carts.push({
                name: this.computer.nom,
                img: this.computer.image,
                price: this.computer.prix,
                quantity: 1
            });
        };
    }]);

App.controller('phonesCtrl', ['$scope', '$http', function ($scope, $http) {
        // Configuration de mon contrôleur resume
        $http.get("assets/json/phones.json")
                .then(function (flic) {
                    $scope.phones = flic.data;
                });
        // Fonction qui envoie les informations de l'article dans un nouveau tableau qui est global
        $scope.addCart = function () {
            $scope.carts.push({
                name: this.phone.nom,
                img: this.phone.image,
                price: this.phone.prix,
                quantity: 1
            });
        };
    }]);

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
                price: this.data.prix,
                quantity: 1
            });
        };
    }]);

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
                price: this.watch.prix,
                quantity: 1
            });
        };
}]);
