angular.module('app')
.controller(
  'UsersController', ['$scope','UserService', function($scope, UserService) {
    UserService.getUsers()
    .then(function(users) {
      $scope.users = users;
    });
  }]);