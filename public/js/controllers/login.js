const loginController = function($scope, $location, factory) {

	$scope.clientLogin = function() {
		var credentials = {
			username: $scope.username,
			password: $scope.password
		};

		factory.login(credentials)
		.then(function(response) {
			var token = response.data.data.token;
			var isAdmin = response.data.data.isAdmin;

			factory.setToken(token);
			factory.setAdmin();

			$location.path('/profile');
		})
		.catch(function(response) {
			alert(response.data.error);
		});
	}

};

loginController.$inject = ['$scope', '$location', 'factory'];
App.controller('loginController', loginController);
