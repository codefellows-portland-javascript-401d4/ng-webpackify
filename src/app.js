'use strict';

const angular = require('angular');
const css = require('./main.css');

const app = angular.module('caraldiApp', []);

app.controller('messageControl', function($scope) {
  $scope.username = "userName"
  $scope.message = "userMessage"
  $scope.display = function(userName, userMessage) {
    return `${ userName } says: ${ userMessage }!`;
  }
});

app.controller('userFont', function($scope) {
  $scope.name = [
    { name: 'Lobster'},
    { name: 'Indie Flower'},
    { name: 'Inconsolata'}
  ];

  $scope.color = [
    { hex: '#9f9e7f' },
    { hex: '#f08080' },
    { hex: '#6897bb' }
  ];
});
