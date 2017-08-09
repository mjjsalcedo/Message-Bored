var app = angular.module('app');

app.controller(
  'UserController', ['$scope', 'Users', function($scope, Users) {
  $scope.users = [];
  Users.getUsers()
  .then((users) => {
    $scope.users = users;
  });
}]);