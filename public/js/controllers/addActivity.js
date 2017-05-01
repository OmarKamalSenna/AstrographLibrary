const addActivityController = function($scope, $location, factory) {
  $scope.tagline = 'Add Activity';
 
  $scope.addActivity = function() {
    var actinfo = {
      name: $scope.a.name,
		  description: $scope.a.description,
      prices: {
        item: $scope.item,
        price: $scope.price
      },
      activityType: factory.getId(),
      client: factory.getPid(),
      isConfirmed: 'false'
    };

    console.log(actinfo.client);

    factory.addActivity(actinfo)
    .then(function(response) {
      console.log(actinfo);
    })
    .catch(function(response){ 
    });
}
};

addActivityController.$inject = ['$scope', '$location', 'factory'];
App.controller('addActivityController', addActivityController);
