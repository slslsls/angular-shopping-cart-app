(function() {
  'use strict';

  angular.module('myApp')
  .config(function($routeProvider) {
    $routeProvider
    .when('/checkout', {
      templateUrl: 'app/checkout/checkout.html',
      controller: 'Checkout'
    })
  });
})();
