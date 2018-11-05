const angular = require('angular');
require('./main.css');

angular.module('messageApp', [])
  .controller('messageInput', function($scope) {
      $scope.body = '';
      $scope.categories = [
      {name: 'Default'},
      {name:'Oswald'},
      {name: 'Marker'},
      {name: 'Roboto'}
      ];
  })
  .controller('main', function($scope) {
      $scope.name = 'hullo';
  });