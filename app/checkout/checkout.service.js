(function() {
  'use strict';

  angular.module('myApp')
    .factory('Checkout', function() {
      return {
        message: 'hello from the Checkout factory',
        bag: [],
        addItem: function(item, qty) {
          for (i = 1; i <= qty; i++) {
            bag.push(item);
          }
        }
      }
    })
})();
