angular.module('app')
.controller(
  'RegisterController', ['$scope','UserService', function($scope, UserService) {
    $scope.newUser = { name: ''};
    $scope.UserService = UserService;
    $scope.addUser = function() {
      var newUser = {
        name: $scope.newUser.name,
      };
      console.log('controllername', newUser);
      UserService.addUser(newUser);
      $scope.newUser.name = '';
    };
  }]);