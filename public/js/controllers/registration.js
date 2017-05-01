const registerController = function ($scope, $location, factory) {
  $scope.tagline = 'AstrographLibrary Registeration';

  $scope.clientRegister = function () {

    // var name={ first : null, last:null};

    var math = {
      username: $scope.username,
      password: $scope.password,
      name: {
        first: $scope.firstName,
        last: $scope.lastName
      },
      mobile: $scope.mobile,
      email: $scope.email



    };
    factory.register(math)
      .then(function (response) {
        console.log(math);
        factory.setPid(response.data.data._id);
        $location.path('/profile');
      })
      .catch(function (response) {
        console.log(math);

      });
  }

};

registerController.$inject = ['$scope', '$location', 'factory'];
App.controller('registerController', registerController);