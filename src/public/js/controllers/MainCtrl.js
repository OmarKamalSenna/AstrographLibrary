// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', []).controller('MainController', function($scope) {

    $scope.tagline = 'AstrographLibrary Home';   
    $scope.rand = Math.ceil(Math.random()*10);
});