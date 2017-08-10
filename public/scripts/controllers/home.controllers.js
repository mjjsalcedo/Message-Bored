angular.module('app')
.controller(
  'HomeController', ['$scope', 'TopicService', function($scope, TopicService) {
    TopicService.getTopics()
    .then(function(topics) {
      console.log(topics);
      $scope.topics = topics;
    });
  }]);