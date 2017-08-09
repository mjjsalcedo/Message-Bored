var app = angular.module('app');

app.controller(
  'HomeController', ['$scope', 'TopicService', function($scope, TopicService) {
    $scope.topicsList = TopicService.getTopics();
    $scope.newTopic = {title: ''};
    $scope.addTopic = function(){
      var newTopic = {
        title: $scope.newTopic.title
      };
      TopicService.addTopic(newTopic);
      $scope.newTopic.title  = '';
    };
}]);