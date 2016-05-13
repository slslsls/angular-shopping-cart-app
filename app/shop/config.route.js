angular.module('myApp')
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/shop/shop.html',
        controller: 'Shop'
      })
  });
