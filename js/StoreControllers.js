
Store.controller('MainCtrl',['$scope','$timeout','$http',"Order", function($scope, $timeout, $http, Order) {

  $scope.purchases = Order.purchases;
  $scope.globalDiscount=Order.globalDiscount

  function resetNewItem(){
    $scope.newItem={
      id: 0,
      name:"",
      price:0,
      discount: 0
    }
    $scope.newItem.id=Order.purchases[Order.purchases.length - 1].id + 1;
  }

  resetNewItem();

  $scope.update = function (discount) {
    Order.update(discount);
    $scope.purchases = Order.purchases;
   };

  $scope.add = function () {
    Order.add($scope.newItem);
    $scope.purchases = Order.purchases;
    resetNewItem();
  };

  $scope.update($scope.globalDiscount);
  
}]);
