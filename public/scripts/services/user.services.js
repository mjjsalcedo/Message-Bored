angular.module('app')
.service('UserService', ['$http', function($http) {
  return {
    getUsers: function() {
      return $http.get('http://localhost:9000/api/users')
      .then(function(users) {
         return users.data;
      });
    }
  };
}]);