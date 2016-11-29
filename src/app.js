const angular = require('angular');
require('./main.css');

angular.module('messageEditorApp', [])

.controller('textCtrl', function ($scope) {
  $scope.moods = ['neutral', 'happy', 'sad', 'tired'];
  $scope.inCurr = 'neutral';
  $scope.fontSize = 18;
});
