const angular = require('angular');
require('./main.css');

const app = angular.module('ngApp', []);

app.controller('inputController', function($scope) {
    $scope.options = ['black', 'blue', 'red', 'yellow', 'green', 'purple'];
    $scope.selected = $scope.options[0];
    $scope.size = 36;
    $scope.font = 'Andale Mono';
});