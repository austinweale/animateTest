var myApp = angular.module('myApp', ['ngAnimate']);

myApp.controller('mainController', function($scope){
    $scope.list = [];
    $scope.count = 0;

    $scope.add = function() {
      for (var i = 0; i < 6; i++) {
        $scope.list.push("item");
        if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
            $scope.$apply();
        }
       
      } 

     }

  
})