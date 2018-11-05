const angular = require('angular');
require('./main.css');


const app = angular.module('myApp', []);

app.controller('stylesController', function($scope) {
  $scope.styles = [
    {name: 'bold'},
    {name: 'fine'},
    {name: 'bright'}
  ];

  $scope.font = {
    size: 22
  };
});

