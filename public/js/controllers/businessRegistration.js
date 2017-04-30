const businessRegistrationController = function($scope, $location, factory) {
  $scope.tagline = 'AstrographLibrary Registeration';
};

businessRegistrationController.$inject = ['$scope', '$location', 'factory'];
App.controller(
  'businessRegistrationController',
  businessRegistrationController
);
