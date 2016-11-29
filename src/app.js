'use strict';

const angular = require('angular');
const reverse = require('./reverse');
require('./main.css');

const app = angular.module('caraldiApp', []);

app.controller('messageControl', function($scope) {
    $scope.styles = ['fatface', 'lobster', 'condensed', 'oswald'];
    $scope.style = 'condensed';
    $scope.fontSize = 22;
    
    $scope.message = 'hello';
    $scope.name = 'world';
    $scope.reverse = reverse;
});
