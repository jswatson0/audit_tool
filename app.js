var app = angular.module('priceAudit', []);

app.controller('MainCtrl', [
  '$scope',
  function($scope){
    $scope.greeting = "Audit Tool";
  }
]);