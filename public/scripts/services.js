angular.module('app')
.service('TopicService', [function() {
  var topics = [];

  return {
    getTopics: function() { return topics; },
    addTopic: function(topic) { topics.push(topic); }
  };
}]);