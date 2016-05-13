(function() {
  'use strict';

  angular.module('myApp')
  .controller('Shop', function($scope, Shop, Checkout) {
    $scope.view = {};
    $scope.view.bag = Checkout.bag;
    $scope.view.items = Shop.items;
    $scope.view.getItems = Shop.getItems();
    $scope.view.consoleLog = function() {
      console.log($scope.view.items);
    }
    $scope.view.addItem = function(item, qty) {
      Checkout.addItem(item, qty)
    }
  })
})();
