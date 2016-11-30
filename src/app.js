const angular = require('angular');
const app = angular.module('myApp', []);
require('./main.css');

app.controller('main', function($scope){
    $scope.message = '';
    $scope.styles = ['normal', 'fancy', 'bold'];
});