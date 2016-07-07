/// <reference path="../assets/angular/angular.js" />
/// <reference path="components/index/index-controller.js" />

var MAP_APP_MODULE_NAME = "map-app";
var MAP_APP_CONTROLLERS_NAME = MAP_APP_MODULE_NAME + ".controllers";
var MAP_APP_DIRECTIVES_NAME = MAP_APP_MODULE_NAME + ".directives";

angular.module(MAP_APP_NAME, ["ngRoute"])
    .config(function ($routeProvider, $locationProvider) {
        // remove o # da url
        $locationProvider.html5Mode(true);

        $routeProvider
           // para a rota '/', carregaremos o template home.html e o controller 'HomeCtrl'
           .when('/', {
               templateUrl: 'app/components/index/index-view.html',
               controller: MAP_APP_INDEX_CONTROLLER_NAME,
           })
        
    });

