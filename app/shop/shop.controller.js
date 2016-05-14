(function() {
  'use strict';

  angular.module('myApp')
  .controller('Shop', function($scope, Shop, Checkout) {
    $scope.view = {};
    $scope.view.bag = Checkout.bag;

    Shop.getItems().then(function(data) {
      $scope.view.items = data;
    });
    $scope.view.addItem = function(item) {
      Checkout.addItem(item);
    }
  });
})();
