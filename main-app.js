angular.module('myApp', [])
.controller('MainCtrl', [function() {
  var self = this;

  self.message = 'Your text here';
  self.styles = ['Normal', 'Robot', 'Alien', 'Cowboy', 'Astronaut'];
  self.style = 'Normal'

}]);