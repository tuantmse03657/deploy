var myApp = angular.module('myApp',['ui.router']);
myApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/home");
  $stateProvider.state('home',{
      url:"/home",
      templateUrl: "./templates/home.html",
      controller: 'home'
    })
    .state('login', {
      url: "/login",
      templateUrl: "./templates/login.html",
      controller: 'login'
    })
    .state('register',{
      url:"/register",
      templateUrl:"./templates/register.html",
      controller: 'register'
    })
});
