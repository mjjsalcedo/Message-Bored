angular.module('app')
.controller(
  'HomeController', ['$scope', 'TopicService', function($scope, TopicService) {
    TopicService.getTopics()
    .then(function(topics) {
      $scope.topics = topics;
    });
    $scope.newTopic = { name: ''};
    $scope.addTopic = function() {
      console.log('boop');
      var newTopic = {
        name: $scope.newTopic.name,
        created_by: localStorage.username
      };
      console.log('controller', newTopic);
      TopicService.addTopic(newTopic);
      $scope.newTopic.name = '';
    };
  }]);