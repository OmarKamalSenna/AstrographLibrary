const clientRegistrationController = function($scope, $location, factory) {
  $scope.tagline = 'AstrographLibrary Registeration';
};

clientRegistrationController.$inject = ['$scope', '$location', 'factory'];
App.controller('clientRegistrationController', clientRegistrationController);
