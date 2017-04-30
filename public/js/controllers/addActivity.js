const addActivityController = function($scope, $location, factory) {
  $scope.tagline = 'Add Activity';
};

addActivityController.$inject = ['$scope', '$location', 'factory'];
App.controller('addActivityController', addActivityController);
