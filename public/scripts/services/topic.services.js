angular.module('app')
.service('TopicService', ['$http', function($http) {
  return {
    getTopics: function() {
      return $http.get('http://localhost:9000/api/topics')
      .then(function(topics) {
         return topics.data;
      });
    },
    getTopic: function(data) {
      return $http.get('http://localhost:9000/api/topics/' + data)
      .then(function(topic) {
         return topic.data;
      });
    },
    addTopic: function(data) {
      console.log('server', data);
      return $http.post('http://localhost:9000/api/topics', data);
    }
  };
}]);