angular.module('myApp', [])
.controller('MainCtrl', [function() {
  var self = this;

  self.message = 'Your text here';
  self.styles = ['Normal', 'Alien', 'Astronaut', 'Cowboy', 'Earthquake', 'Monster', 'Ninja', 'Robot', 'Scout', 'Vampire','VanGogh'];
  
  self.style = 'Normal';

  self.randomStyle = function() {
    var index = Math.floor(Math.random() * self.styles.length);
    return self.style = self.styles[index];
  };
}]);