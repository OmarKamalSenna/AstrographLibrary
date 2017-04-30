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
      controller: 'regCtrl',
      controllerAs: 'register'

    })
    .when('/registration/clients', {
      templateUrl: 'views/clientRegistration.html',
      controller: 'clientRegistrationController'
    })
    .when('/registration/businesses', {
      templateUrl: 'views/businessRegistration.html',
      controller: 'businessRegistrationController'
    })
    .when('/activity/add', {
      templateUrl: 'views/addActivity.html',
      controller: 'addActivityController'
    });
});
