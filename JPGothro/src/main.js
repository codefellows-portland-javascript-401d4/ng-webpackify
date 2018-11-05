const angular = require('angular');

require('./main.css');

var app = angular.module('myApp', []);

app.controller('styleController', function($scope) {
    $scope.colors = [
        {name: 'red', class: 'red'},
        {name: 'blue', class: 'blue'},
        {name: 'yellow', class: 'yellow'},
        {name: 'green', class: 'green'},
        {name: 'purple', class: 'purple'},
        {name: 'black', class: 'black'}
    ];

    $scope.myColor = $scope.colors[4];

    $scope.text = {
        size: 22
    };
});
