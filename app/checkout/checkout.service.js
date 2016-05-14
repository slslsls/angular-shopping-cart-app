(function() {
  'use strict';

  angular.module('myApp')
    .factory('Checkout', function($http) {
      return {
        bag: [],
        addItem: function(item) {
          if (item.qty === undefined) {
            this.bag.push(item);
          } else {
            for (var i = 0; i < item.qty; i++) {
              this.bag.push(item);
            }
          }
        }
      }
    })
})();
