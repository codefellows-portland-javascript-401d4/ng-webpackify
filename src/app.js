const angular = require('angular');
require('./style.css');


const app = angular.module('myApp', []);

app.controller('styleCtrl', $scope => {
  $scope.styleOpts = ['big', 'bold', 'beautiful'];
  $scope.rangeVal = 4;
});
