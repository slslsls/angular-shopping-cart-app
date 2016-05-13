(function() {
  'use strict';

  angular.module('myApp')
    .factory('Shop', function($http) {
      var self = this;

      return {
        items: [],
        getItems: function() {
          $http.get('teas.json')
            .then(function(data) {
              // console.log(data.data);
              self.items = data.data;
              console.log(self.items);
            });
        }
      }
    })
})();
