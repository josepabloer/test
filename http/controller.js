var app = angular.module("MyFirstApp", []);

app.controller("FirstController", function($scope, $http){
  $scope.posts = [];
  $http.get("http://jsonplaceholder.typicode.com/posts")
    .then(function(response){
      console.log(response, 'res');
      data = response.data;
      $scope.posts = data;
    },function(error){
      console.log(error, "can`t get data");
    });
});
