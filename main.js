/** Created by Gloria Anholt on 11/28/16. **/

var helloApp = angular.module('helloApp', []);

helloApp.controller('helloController', function($scope) {

  $scope.languages = ['English', 'Spanish', 'French', 'Japanese'];

  $scope.selected = function(lang) {
    if (lang === 'English') {
      $scope.greeting = 'Hello!';
    } else if (lang === 'Spanish') {
      $scope.greeting = 'Hola!';
    } else if (lang === 'French') {
      $scope.greeting = 'Bon jour!';
    } else if (lang === 'Japanese') {
      $scope.greeting = 'Konnichiwa!';
    }
  }

});
