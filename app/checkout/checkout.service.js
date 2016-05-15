(function() {
  'use strict';

  angular.module('myApp')
    .factory('Checkout', function($http) {
      return {
        bag: [],
        total: 0,
        updateTotal: function() {
          var tempTotal = 0;

          for (var i = 0; i < this.bag.length; i++) {
            tempTotal += (this.bag[i].qty * this.bag[i].price);
          }
          this.total = tempTotal;
        },
        addItem: function(item) {
          if (item.qty === undefined) {
            item.qty = 1;
          }
          this.bag.push(item);
          this.updateTotal();
        },
        removeItem: function(item) {
          for (var i = 0; i < this.bag.length; i++) {
            if (this.bag[i] === item) {
              var idx = this.bag.indexOf(this.bag[i]);

              this.bag.splice(idx, 1);
            }
          this.updateTotal();
          }
        }
      }
    })
})();
