const activitiesListController = function ($scope, $location, factory) {
	//var isVisitor = factory.isVisitor();
	//var isAdmin = factory.isAdmin();


	var isVisitor = factory.isVisitor();

	if(isVisitor) {
		$location.path('/login');
	} else {
		factory.actList()
		.then(function(response) {
			$scope.work = response.data.data[0];
		})
		.catch(function(response) {
			alert(response.data.error);
		});
	}

};

activitiesListController.$inject = ['$scope', '$location', 'factory'];
App.controller('activitiesListController', activitiesListController);
