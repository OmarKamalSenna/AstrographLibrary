const createActivityController = function ($scope, $location, factory) {
 // $scope.tagline = 'AstrographLibrary Registeration';

  $scope.createActivity = function () {

    // var name={ first : null, last:null};

    var actData = {
      name: $scope.name,
      description: $scope.description,
      prices: {
        item: $scope.item,
        price: $scope.price
      },
      mobile: $scope.mobile,
      email: $scope.email,
      isConfirmed :'false'
    };
    factory.actCreate(actData)
      .then(function (response) {
        console.log(actData);

        $location.path('/profile');
      })
      .catch(function (response) {
        console.log(actData);

      });
  }

};

createActivityController.$inject = ['$scope', '$location', 'factory'];
App.controller('createActivityController', createActivityController);