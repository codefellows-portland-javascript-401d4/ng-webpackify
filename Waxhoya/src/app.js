const angular = require('angular');
require('./style.css');

var app = angular.module('myApp', []);

app.controller('formMsg', function($scope) {
    $scope.message = 'default';
    $scope.fontRange = 3;
    $scope.styles = ['spicy','cooling','indignant'];
    $scope.custStyle = 'spicy';
});