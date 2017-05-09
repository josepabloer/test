var app = angular.module("MyFirstApp", []);

app.controller("FirstController", function($scope){
  $scope.nombre = "Jose";
  $scope.nuevoComentario = {};
  $scope.comentarios = [
    {
      comentario: "Buen tutorial",
      username: "jose"
    },
    {
      comentario: "Mal tutorial",
      username: "pedro"
    }
  ];
  $scope.agregarComentario = function(){
    $scope.comentarios.push($scope.nuevoComentario);
    $scope.nuevoComentario = {};
  }
});
