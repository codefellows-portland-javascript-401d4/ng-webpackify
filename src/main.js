const angular = require('angular');

var app = angular.module('myApp', []);

app.controller('formCtrl', function($scope) {
  $scope.fonts = ['Courier New', 'Helvetica', 'Impact', 'Times New Roman', 'Verdana'];
  $scope.styles = ['fancy', 'plain', 'modern'];
  $scope.style = 'plain';
  $scope.message = 'hello world';
});