const angular = require('angular');
const app = angular.module('myApp', []);

require('./main.css');

app.controller('moodCtrl', function($scope) {
    $scope.items = ['classic', 'fancy', 'fantastic'];
});



