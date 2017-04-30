const loginController = function($scope, $location, factory) {
  $scope.tagline = 'AstrographLibrary Login';

  const credentials = {
  	username: $scope.username,
  	password: $scope.password
  };

  factory.login(credentials)
	  .then(function(response) {
	  	console.log("SUCCESS =>", response);
	  	factory.setToken(/*token*/);
	  })
	  .catch(function(response) {
	  	console.log("ERROR =>", response);
	  })
};

loginController.$inject = ['$scope', '$location', 'factory'];
App.controller('loginController', loginController);
