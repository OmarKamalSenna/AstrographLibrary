// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // profile
        .when('/profile', {
            templateUrl: 'views/profile.html',
            controller: 'ProfileController'
        })
        // Registeration
        .when('/reg', {
            templateUrl: 'views/reg.html',
            controller: 'RegController'
        })
        // Login
        .when('/log', {
            templateUrl: 'views/log.html',
            controller: 'LogController'
        });

    $locationProvider.html5Mode(true);

}]);