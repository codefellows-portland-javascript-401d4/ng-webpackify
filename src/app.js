const angular = require('angular');
require('./main.css');
require('./addOn.css');


var app = angular.module('angularInput', []); //eslint-disable-line

let init = 0;

app.controller('counterCtrl', $scope => {
  $scope.pets = ['cat', 'dog', 'fish'];
  $scope.count = init++;
  $scope.reset = () => {
    $scope.count = 0;
  };

  $scope.subtract = () => { $scope.count--; };
  $scope.add = () => { $scope.count++; };

  $scope.display = (count) => {
    return `the count is ${count}`;
  };

  $scope.selectedAnimal = 'dog';
});
