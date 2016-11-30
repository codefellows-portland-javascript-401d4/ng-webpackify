const angular = require('angular');
require('./message.css');
var app = angular.module('connote', []);

app.controller('moods', function($scope) {
	$scope.moods = ['furious', 'upset', 'peeved', 'neutral', 'pleased', 'happy', 'ecstatic'];
});
