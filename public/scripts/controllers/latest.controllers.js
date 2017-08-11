angular.module('app')
.controller(
  'LatestController', ['$scope','MessageService', function($scope, MessageService) {
    MessageService.getMessages()
    .then(function(messages) {
      console.log(messages);
      $scope.messages = messages;
    });
  }]);