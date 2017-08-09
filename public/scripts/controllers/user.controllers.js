angular.module('app')
.controller(
  'UserController', ['$scope', 'UserService', function($scope, UserService) {
    $scope.users = [];
    UserService.getUsers()
    .then(function(users) {
      $scope.users = users;
    });
  }]);