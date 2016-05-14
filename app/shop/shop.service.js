(function() {
  'use strict';

  angular.module('myApp')
    .factory('Shop', function($http) {
      return {
        getItems: function() {
          return $http.get('teas.json')
            .then(function(data) {
              return data.data;
            });
        }
      }
    })
})();
