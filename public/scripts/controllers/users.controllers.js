angular.module('app')
.controller(
  'UsersController', ['$scope','UserService', function($scope, UserService) {
    $scope.users = [];
    UserService.getUsers()
    .then(function(users) {
      $scope.users = users;

    });
  }]);