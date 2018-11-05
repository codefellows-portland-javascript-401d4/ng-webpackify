'use strict';

const angular = require('angular');
require('./main.css');

const app = angular.module('caraldiApp', []);

app.controller('mainController', function($scope) {
    $scope.styles = ['abril', 'lobster', 'amatic', 'oswald'];
    $scope.style = 'abril';
    $scope.fontSize = 28;
    $scope.name = '';
    $scope.message = '';
});
