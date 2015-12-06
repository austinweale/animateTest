var myApp = angular.module('myApp', ['ngAnimate']);

myApp.controller('mainController', function($scope){
    $scope.list = [];

    $scope.add = function() {
      for (var i = 0; i < 6; i++) {
        $scope.list.push("item");
      } 

   }
  
})