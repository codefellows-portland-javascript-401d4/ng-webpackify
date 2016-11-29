const angular = require('angular');
const app = angular.module('myApp', []);
const casingjs = require('./casing');
const fontsize = require('./fontsize');
require('./main.css');

app
    .controller('main', ['$scope', function($scope) {
        $scope.message = 'Hello World';
        $scope.styles = ['modern', 'boring', 'fancy'];
        $scope.myStyle = $scope.styles[0];
        $scope.casings = ['N/A', 'lower', 'upper'];
        $scope.myCasing = $scope.casings[0];
        $scope.fontsize = fontsize;
        $scope.mySize = 24;
        $scope.casingjs = casingjs;
    }]);
