'use strict';

const angular = require('angular');
require('./main.css');

const app = angular.module('caraldiApp', []);

app.controller('mainController', function($scope) {
    $scope.styles = ['fatface', 'lobster', 'condensed', 'oswald'];
    $scope.style = 'fatface';
    $scope.fontSize = 22;
    
    $scope.message = 'hello';
    $scope.name = 'world';
});
