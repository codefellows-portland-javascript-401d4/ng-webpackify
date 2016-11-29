'use strict';

const app = angular.module('myApp', []);

app.controller('mainController', function($scope) {
  $scope.colors = [
    { name: 'black' },
    { name: 'blue' },
    { name: 'red' },
    { name: 'green' }
  ];
  $scope.defaultColor = $scope.colors[0];
});