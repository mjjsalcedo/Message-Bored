angular.module('app')
.controller(
  'UserController', ['$scope','$routeParams','UserService', function($scope, $routeParams, UserService) {
    var userId = $routeParams.id;
    UserService.getUser(userId)
    .then(function(user) {
      $scope.user = user.username;
      $scope.messages = user.messages;
    });
  }]);