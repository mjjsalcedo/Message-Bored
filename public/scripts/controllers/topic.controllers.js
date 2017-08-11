angular.module('app')
.controller(
  'TopicController', ['$scope','$routeParams','TopicService', function($scope, $routeParams, TopicService) {
    var topicId = $routeParams.id;
    TopicService.getTopic(topicId)
    .then(function(topic) {
      $scope.topic = topic;
      $scope.messages = topic.messages;
    });
  }]);