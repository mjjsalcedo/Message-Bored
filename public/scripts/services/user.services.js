angular.module('app')
.service('UserService', ['$http', function($http) {
  return {
    getUsers: function() {
      return $http.get('http://localhost:9000/api/users')
      .then(function(users) {
         return users.data;
      });
    },
    getUser: function(data) {
      return $http.get('http://localhost:9000/api/users/' + data)
      .then(function(user) {
         return user.data;
      });
    }
  };
}]);