/** Created by Gloria Anholt on 11/28/16. **/

var helloApp = angular.module('helloApp', []);

helloApp.controller('helloController', function($scope) {
  $scope.greeting = 'Hola!';
});
