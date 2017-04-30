const profileController = function($scope, $location, factory) {
	var isVisitor = factory.isVisitor();

	if(isVisitor) {
		$location.path('/login');
	} else {
		factory.getProfile()
		.then(function(response) {
			$scope.user = response.data.data;
		})
		.catch(function(response) {
			alert(response.data.error);
		});
	}
};

profileController.$inject = ['$scope', '$location', 'factory'];
App.controller('profileController', profileController);
