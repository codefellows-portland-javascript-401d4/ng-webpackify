const angular = require('angular');
require('!style!css!./style.css');

var app = angular.module('myApp', []);

app.controller('formCtrl', function($scope) {
  $scope.fonts = ['Courier New', 'Helvetica', 'Impact', 'Times New Roman', 'Verdana'];
  $scope.styles = ['fancy', 'plain', 'modern'];
  $scope.style = 'plain';
  $scope.message = 'hello world';
});