var myApp = angular.module('ngEditor', []); // eslint-disable-line

myApp.controller('main', ['$scope', function ($scope) {
  $scope.message = 'hello world';
  $scope.family = { name: 'font family' };
  $scope.colors = [
    {name: 'black'},
    {name: 'red'},
    {name: 'blue'},
    {name: 'green'}
  ];
  $scope.value = 12;
  $scope.min = 8;
  $scope.max = 48;
}]);
