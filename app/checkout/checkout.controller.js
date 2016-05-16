(function() {
  'use strict';

  angular.module('myApp')
  .controller('Checkout', function($scope, Checkout) {
    $scope.view = {};
    $scope.view.bag = Checkout.bag;
    $scope.view.total = Checkout.total;
    $scope.view.updateTotal = function() {
      Checkout.updateTotal();
    };
    $scope.view.editItem = function(item) {
      Checkout.editItem(item);
      $scope.view.total = Checkout.total;
    };
    $scope.view.removeItem = function(item) {
      Checkout.removeItem(item);
      $scope.view.total = Checkout.total;
    };
  });
})();
