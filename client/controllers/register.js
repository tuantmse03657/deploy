myApp.controller('register',['$scope','$http',function($scope,$http){
  $scope.user={};
  $scope.message = "";
  $scope.register = function(){
    $http.post('/api/register',{user:$scope.user}).then(function(res){
      console.log(res);
    })
  }
}])
