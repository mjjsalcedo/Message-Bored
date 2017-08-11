angular.module('app')
.controller(
  'HomeController', ['$scope', 'TopicService', function($scope, TopicService) {
    TopicService.getTopics()
    .then(function(topics) {
      $scope.topics = topics;
    });
  }]);