
angular.module(MAP_APP_NAME, ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider
            // route for the home page
            .when('/', {
                templateUrl : 'components/index/index-view.html',
                controller: 'components/index/index-controller.js'
            })

            // route for the about page
            .when('/', {
                templateUrl: 'components/about/about-view.html',
                controller: 'components/about/about-controller.js'
            });
    });
