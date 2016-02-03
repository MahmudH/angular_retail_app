'use strict';

storeApp.controller('DiscountController', ['Discounts', function(Discounts){
  var self = this;

  self.discounts = [];
  Discounts.get('discounts/discounts.json').success(function(data) {
    self.discounts = data;
  });

  self.checkDiscount = function(code){
    if (code !== undefined) {

    }
  };

  // self._applyDiscount = function(totalPrice, discount){
  //   totalPrice -= totalPrice + discount;
  // };

}]);
