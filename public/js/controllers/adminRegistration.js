const adminRegistrationController = function($scope, $location, factory) {
  $scope.tagline = 'AstrographLibrary Registeration';

$scope.adminRegister = function() {
		 
		 var isAdmin = factory.isAdmin();
		 var math = {
		 	username: $scope.username,
		 //	isAdmin: $scope.admin,
			password: $scope.password,
			name: {
            first: $scope.firstName,
            last: $scope.lastName
            },
		    mobile: $scope.mobile,
			email:$scope.email

		};




         if(!isAdmin){
         	$location.path('/profile');
         } else {
        factory.createAdmin(math)
		.then(function(response) {
			console.log(math);
			
			$location.path('/profile');
		})
		.catch(function(response) {
			alert("Not Admin");
			
			}  ); }
	}};




adminRegistrationController.$inject = ['$scope', '$location', 'factory'];
App.controller('adminRegistrationController', adminRegistrationController);
