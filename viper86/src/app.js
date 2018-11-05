const app = angular.module('myApp', []);
require('./main.css');

app.controller('mainController', function($scope) {
  $scope.colors = [
    { name: 'black' },
    { name: 'blue' },
    { name: 'red' },
    { name: 'green' }
  ];
  $scope.myColor = $scope.colors[0];
});