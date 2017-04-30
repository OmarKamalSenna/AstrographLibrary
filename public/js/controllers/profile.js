const profileController = function($scope, $location, factory) {
  $scope.tagline = 'AstrographLibrary Profile';
};

profileController.$inject = ['$scope', '$location', 'factory'];
App.controller('profileController', profileController);
