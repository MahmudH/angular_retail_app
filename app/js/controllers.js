'use strict';

/* Controllers */

storeApp.controller('productsCtrl', ['$http', function($http) {

  var self = this;

  $http.get('products/products.json').success(function(data) {
    self.products = data;
  });

  // self.setCard = function(card){
  //   self.card === card ? self.card = false : self.card = card;
  // };
  //
  // self.selectedCard = function(card){
  //   return self.card === card;
  // };

}]);
