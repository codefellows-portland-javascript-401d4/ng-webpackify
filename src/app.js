const angular = require('angular');
require('./main.css');

const app = angular.module('myApp', []);

app.controller('aboutMeCtrl', function($scope) {
  
  function randomGen(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  $scope.randomNum = randomGen(0, 150);

  $scope.reverse = function(input) {
    return input.split('').reverse().join('');
  };

  $scope.opinions = [{'opinion':'a lot', 'smiley': ':)'}, {
    'opinion': 'a bit', 'smiley': ':|'}, {'opinion': 'not at all', 'smiley': ':('}];
});