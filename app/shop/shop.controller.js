(function() {
  'use strict';

  angular.module('myApp')
  .controller('Shop', function($scope, Shop, Checkout) {
    $scope.view = {};
    $scope.view.bag = Checkout.bag;
    $scope.view.categories = [];
    $scope.view.quantities = [1,2,3,4,5,6,7,8,9,10];
    Shop.getItems().then(function(data) {
      $scope.view.items = data;

      for (var i = 0; i < data.length; i++) {
        var item = data[i];

        for (var j = 0; j < item.categories.length; j++) {
          if ($scope.view.categories.indexOf(item.categories[j]) === -1) {
            $scope.view.categories.push(item.categories[j]);
          }
        }
      }
    });
    $scope.view.addItem = function(item) {
      Checkout.addItem(item);
    }
  });
})();
