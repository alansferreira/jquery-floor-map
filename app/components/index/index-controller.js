/// <reference path="../../../assets/angular/angular.js" />
/// <reference path="../../app-module.js" />

var MAP_APP_INDEX_CONTROLLER_NAME = MAP_APP_CONTROLLERS_NAME + ".index";

angular.module(MAP_APP_NAME)
    .controller(MAP_APP_INDEX_CONTROLLER_NAME, [function ($scope, $http, $filter, MyService) {
        $scope.coloredSegments = [{ style: "blue" }, { style: "red" }];
        // other functions...


    }]);
