const angular = require('angular');
require('./main.css');

const app = angular.module('myApp', []);

app.controller('mainCtrl', function($scope) {
  $scope.colors = ['blue','red', 'green', 'purple', 'orange'];
  $scope.color = 'blue';
});
