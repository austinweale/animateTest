var myApp = angular.module('myApp', ['ngAnimate']);

myApp.controller('mainController', function($scope){
    $scope.data = [1, 2, 3, 4, 5, 6, 7, 8, 9];


    
})
.animation('.slide', [function() {
  return {
    // make note that other events (like addClass/removeClass)
    // have different function input parameters
    enter: function(element, doneFn) {
      $(element).fadeIn(1000, doneFn);

      // remember to call doneFn so that angular
      // knows that the animation has concluded
    },

    move: function(element, doneFn) {
      $(element).fadeIn(1000, doneFn);
    },

    leave: function(element, doneFn) {
      $(element).fadeOut(1000, doneFn);
    }
  }
}]);