angular.module('app')
.controller(
  'HomeController', ['$scope', 'TopicService', function($scope, TopicService) {
    $scope.users = [];
    TopicService.getTopics()
    .then(function(topics) {
      $scope.topics = topics;
    });
  }]);