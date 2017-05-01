const businessRegistrationController = function($scope, $location, factory) {
$scope.businessRegister = function() {
  var info = {
      name: $scope.name,
      description: $scope.description,
      location: {
        longitude: $scope.longitude,
        latitude: $scope.latitude
      },
      openingHours: {
        from: $scope.open,
        to: $scope.close
      },
      owner: factory.getPid(),
      activities: []
    };

    
			console.log(info);

    factory.businessRegister(info)
		.then(function(response) {
		})
		.catch(function(response) {
		});

  }
};

businessRegistrationController.$inject = ['$scope', '$location', 'factory'];
App.controller(
  'businessRegistrationController',
  businessRegistrationController
);
