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


$scope.addNewActivity = function() {
		console.log("Activity Added");
		// var isAdmin = factory.isAdmin();
		//  var info = {

	 // 	name: $scope.name,
	 //    type: $scope.type,
	 //    item: $scope.item,
	 //    price: $scope.price,
	 //    description: $scope.description
	    

		// };
		// if(!isAdmin){
  //        	alert("You are Not ADMIN!");
  //        }else{
  //        	factory.addNewActivity(info)
		// .then(function(response) {
		// 	console.log(response);
			
		// 	alert('Your Activity has been added!');
		// })
		// .catch(function(response) {
		// 	alert("Not Admin");
			
		// 	}  );
  //        }
	}
	$scope.editActivity = function() {
		console.log("data Edited");
		
	}
	
	$scope.deleteActivity = function() {
		console.log("data Deleted");
		
		var isAdmin = factory.isAdmin();
         

         
        factory.deleteActivity()
		.then(function(response) {
            console.log("Yes Deleted Successfully");
			console.log(response);
			
			$location.path('/profile');
		})
		.catch(function(response) {
		console.log("wrongggggggg");
			
			}  ); 
	}


$scope.deleteActivityType = function() {
	  
		 var isAdmin = factory.isAdmin();
         

         if(!isAdmin){
         	$location.path('/home');
         	alert("Not Admin");
         } else {
        factory.deleteActivityType()
		.then(function(response) {
            console.log("foeeee meeeeeee");
			console.log(response);
			
			$location.path('/profile');
		})
		.catch(function(response) {
		console.log("wrongggggggg");
			
			}  ); }

}

$scope.editActivityType = function() {
	  
		var isAdmin = factory.isAdmin();
          var info = {

		 	name: $scope.name1,
		    description: $scope.description1,

		};
         

         if(!isAdmin){
         	$location.path('/home');
         	alert("Not Admin");
         } else {
        factory.editActivityType(info)
		.then(function(response) {
            console.log("foeeee meeeeeee");
			console.log(response);
			
			$location.path('/profile');
		})
		.catch(function(response) {
		console.log("wrongggggggg");
			
			}  ); }

}



$scope.addActivityType = function() {
	 
		 var isAdmin = factory.isAdmin();
          var info = {

		 	name: $scope.name0,
		    description: $scope.description0,

		};
		  if(!isAdmin){
         	$location.path('/home');
         } else {
        factory.addActivityType(info)
		.then(function(response) {
			console.log(response);
			factory.setID(response.data.data._id);
       
			
			$location.path('/home');
		})
		.catch(function(response) {
			alert("Not Admin");
			
			}  ); }

}};

profileController.$inject = ['$scope', '$location', 'factory'];
App.controller('profileController', profileController);

