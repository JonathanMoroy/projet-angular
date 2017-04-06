// On déclare le module
    var app = angular.module('computersApp', []);
    // On défini le contrôleur
    app.controller('computersCtrl', function($scope, $http) {
      // On va chercher le contenu de computers.json
      $http.get('assets/json/computers.json')
        // Si on le récupère avec succès on le stocke dans la variable $scope.computers
        .then(function(res){
          $scope.computers = res.data;
        });
    });


