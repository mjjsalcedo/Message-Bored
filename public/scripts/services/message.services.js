angular.module('app')
.service('MessageService', ['$http', function($http) {
  return {
    getMessages: function() {
      return $http.get('http://localhost:9000/api/messages')
      .then(function(messages) {
         return messages.data;
      });
    },
    addMessage: function(data) {
      return $http.post('http://localhost:9000/api/messages', data);
    }
  };
}]);