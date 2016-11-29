var app = angular.module('myApp', []);


app.controller('frustratedCtrl', function($scope) {
  $scope.data = ['not', 'somewhat', 'very', 'extremely'];
  $scope.text = 'Your feelings.';
});