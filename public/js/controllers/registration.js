angular.module('userRegistration', [])

.controller('regCtrl', function($http) {

    this.regUser = function() {
      console.log('Form Submitted');
      console.log(this.regData);

      $http.post('http://localhost:8080/api/signup', this.regData)
      .then(function(response) {
      	console.log(response);
      })
      .catch(function(response){
      	console.log(response);
      })
    }
});