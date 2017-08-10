angular.module('app')
.controller(
  'UserController', ['$scope','$routeParams','UserService', function($scope, $routeParams, UserService) {
    $scope.user = [];
    var userId = $routeParams.id;
    UserService.getUser(userId)
    .then(function(user) {
       console.log(user);
      $scope.user = user.username;
      $scope.messages = user.messages;
    });
  }]);