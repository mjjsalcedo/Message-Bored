angular.module('app')
.controller(
  'TopicController', ['$scope','$routeParams','TopicService', 'MessageService', function($scope, $routeParams, TopicService, MessageService) {
    var topicId = $routeParams.id;
    function getTopic(){
      TopicService.getTopic(topicId)
      .then(function(topic) {
        $scope.topic = topic;
        $scope.messages = topic.messages;
      });
    }
    $scope.newMessage = { body: ''};
    $scope.addMessage = function() {
      console.log(topicId);
      var newMessage = {
        body: $scope.newMessage.body,
        topic_id: $scope.topic.id,
        created_by: localStorage.username
      };
      MessageService.addMessage(newMessage)
      .then(TopicService.getTopic(topicId));
      $scope.newMessage.body = '';
    };
    getTopic();
  }]);