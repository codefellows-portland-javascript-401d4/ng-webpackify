/** Created by Gloria Anholt on 11/28/16. **/

var helloApp = angular.module('helloApp', []);

helloApp.controller('helloController', function($scope) {

  $scope.languages = ['Arabic', 'English', 'French', 'Hindi', 'Japanese', 'Mandarin', 'Spanish'];
  $scope.greeting = 'Hello';

  $scope.selected = function(lang) {
    if (lang === 'Arabic') {
      $scope.greeting = 'Marhabaan';
    } else if (lang === 'English') {
      $scope.greeting = 'Hello';
    } else if (lang === 'French') {
      $scope.greeting = 'Bon jour';
    } else if (lang === 'Hindi') {
      $scope.greeting = 'Namaste';
    } else if (lang === 'Japanese') {
      $scope.greeting = 'Konnichiwa';
    } else if (lang === 'Mandarin') {
      $scope.greeting = 'Ni hao';
    } else if (lang === 'Spanish') {
      $scope.greeting = 'Hola';
    }
  };
});

helloApp.controller('styleController', function($scope) {

  
});
