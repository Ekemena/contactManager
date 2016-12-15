var app = angular.module('myShoppingList', []);

app.controller('myCtrl', function($scope){

$scope.products = ["Milk", "Brea", "Cheese"];

$scope.addItem = function(){
  if(!$scope.addMe){ return;}
  if($scope.products.indexOf($scope.addMe) == -1){
     $scope.products.push($scope.addMe);
  }else{
    $scope.errortext = "The Item is already in you shopping list";
  }
  
}

$scope.removeItem = function(x) {
  $scope.products.splice(x, 1);
}


 });