// Code goes here

angular.module('myApp', [])
.controller('oneController', ['$scope', '$http', function($scope, $http) {
  $http.get('countries.json').success( function(data) {
    $scope.countries = data;
  });
}]);
