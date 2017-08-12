angular.module('app')
.service('LoginService', ['$http', function($http) {
  return {
    loginUser: function(data) {
      return $http.get('http://localhost:9000/api/users/login/' + data)
      .then(function(user){
        if(user !== null){
          localStorage.setItem('username', user.data.username);
        }
      });
    },
    logoutUser: function(data) {
        if(data !== null){
          localStorage.removeItem('username');
        }
    }
  };
}]);