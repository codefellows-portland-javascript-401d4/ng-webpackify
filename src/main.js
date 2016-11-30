const angular = require('angular');
require('./main.css');

const app = angular.module('myApp', []);



app.controller('colorController', function($scope) {
  $scope.colors = [
    { name: 'blue' },
    { name: 'gold' },
    { name: 'green' }
  ];

  $scope.yourColor = $scope.colors[0];
});