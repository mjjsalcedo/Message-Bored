angular.module('app', ['ngRoute']);

var app = angular.module('app');

app
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'home.html',
    controller: 'HomeController'
  })
  .when('/register', {
    templateUrl: 'register.html',
    controller: 'RegisterController'
  })
  .when('/users', {
    templateUrl: 'users.html',
    controller: 'UsersController'
  })
  .when('/users/:id', {
    templateUrl: 'user.html',
    controller: 'UserController'
  })
  .when('/topics/:id', {
    templateUrl: 'topic.html',
    controller: 'TopicController'
  })
  .otherwise({ redirectTo: '/' });

  $locationProvider.html5Mode(true);
}])
.run(['$rootScope', 'APP_VERSION', function($rootScope, APP_VERSION){
    // initialize
    console.log('running');

    $rootScope.version = APP_VERSION;
}]);