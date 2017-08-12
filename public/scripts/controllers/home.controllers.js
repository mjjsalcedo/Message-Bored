angular.module('app')
.controller(
  'HomeController', ['$scope', 'TopicService', function($scope, TopicService, LoginService) {
    function getTopics(){
      TopicService.getTopics()
      .then(function(topics) {
        $scope.topics = topics;
      });
    }
    $scope.newTopic = { name: ''};
    $scope.addTopic = function() {
      var newTopic = {
        name: $scope.newTopic.name,
        created_by: localStorage.username
      };
      TopicService.addTopic(newTopic)
      .then(getTopics);
      $scope.newTopic.name = '';
    };
    getTopics();
    LoginService.logoutUser();
  }]);