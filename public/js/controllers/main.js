const mainController = function($scope, $location, factory) {
  $scope.tagline = 'AstrographLibrary Home';
  $scope.rand = Math.ceil(Math.random() * 10);
};

mainController.$inject = ['$scope', '$location', 'factory'];
App.controller('mainController', mainController);
