
var app = angular.module('myApp', []);

app.controller('changeFont', function($scope) {
  $scope.fonts = [
    "Arial",
    "Tahoma", 
    "Times New Roman",
    "Cambria",
    "Gill Sans",
    "fantasy"
  ];

  $scope.text = {
    font: "Arial",
    size: 18
  };

})
