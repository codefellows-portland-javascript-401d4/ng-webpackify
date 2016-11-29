'use strict';

const angular = require('angular');
const css = require('./main.css');
const reverse = require('./reverse');

const app = angular.module('caraldiApp', []);

app.controller('messageControl', function($scope) {
    $scope.styles = ['fatface', 'lobster', 'condensed', 'oswald'];
    $scope.style = 'condensed';
    $scope.fontSize = 22;
    
    $scope.message = 'hello';
    $scope.name = 'world';
    $scope.reverse = reverse;
});
