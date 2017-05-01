App.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'mainController'
    })
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'loginController'
    })
    .when('/profile', {
      templateUrl: 'views/profile.html',
      controller: 'profileController'
    })
     .when('/registration', {
       templateUrl: 'views/registration.html',
       controller: 'registerController'
     })
      .when('/adminRegistration', {
       templateUrl: 'views/adminRegistration.html',
       controller: 'adminRegistrationController'
     })
      .when('/registration/businessess', {
       templateUrl: 'views/businessRegistration.html',
       controller: 'businessRegistrationController'
     })
    .when('/addActivity', {
      templateUrl: 'views/addActivity.html',
      controller: 'createActivityController'
    })
    .when('/listActivity', {
      templateUrl: 'views/activityList.html',
      controller: 'activitiesListController'
    });
});
