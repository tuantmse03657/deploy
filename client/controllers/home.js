myApp.controller('home',['$scope',"$state", function($scope,$state){
  $scope.login = function(){
    $state.go('login');
  };
  $scope.register = function(){
    $state.go('register');
  };
}]);
