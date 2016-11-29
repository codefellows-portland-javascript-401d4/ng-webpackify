'use strict';

const angular = require('angular');
const css = require('./main.css');
const reverse = require('./reverse');

const app = angular.module('caraldiApp', []);

app.controller('messageControl', function($scope) {
    $scope.styles = [
        { font: 'standard', hex: '#14418a' },
        { font: 'retro', hex: '#9f9e7f' },
        { font: 'handwritten', hex: '#f08080' },
        { font: 'typewriter', hex: '#6897bb' }    
    ];
    $scope.style = 'standard';
    $scope.fontSize = 22;
    
    $scope.userMessage = 'hello';
    $scope.userName = 'world';
    $scope.reverse = reverse;
});
