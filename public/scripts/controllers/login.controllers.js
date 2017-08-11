angular.module('app')
.controller(
  'LoginController', ['$scope','LoginService', function($scope, LoginService) {
    $scope.pendingUser = { name: ''};
    $scope.LoginService = LoginService;
    $scope.loginUser = function() {
      var username = $scope.pendingUser.name;
      LoginService.loginUser(username);
      $scope.pendingUser.name = '';
    };
  }]);