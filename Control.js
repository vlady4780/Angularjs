//Creacion del modulo angular
var app = angular.module("UazonApp", []);
//Creacion de controlador con la variable app
app.controller("FirstController", function($scope, $http) {
    //Creando la funcion importar, donde se llama al Json
    $scope.importar = function() {
            $http.get('books.json').then(function(datos) {

                $scope.objeto = datos.data;
            });
        }
        //Usar la funcion importar 
    $scope.importar();
    //Funcion para mostrar 
    var a1 = document.getElementById('of1');
    var a2 = document.getElementById('of2');
    var a3 = document.getElementById('otro');
    $scope.Mostrar = function() {
        var a;

        for (x = 0; x < $scope.objeto.Libros.length; x++) {

            a = $scope.objeto.Libros[x];

            if ($scope.libro == a.Nombre && $scope.autor == a.Autor) {

                $scope.mostrar = true;
                $scope.libro = a.Nombre;
                $scope.autor = a.Autor;
                $scope.Descripcion = a.Descripcion;
                a1.disabled = true;
                a2.disabled = true;
                a3.style.display = 'block';
            }

        }
        $scope.nuevo = function() {
            $scope.mostrar = false;
            $scope.libro = "";
            $scope.autor = "";
            a1.disabled = false;
            a2.disabled = false;
            a3.style.display = 'none';
        }

    }


});