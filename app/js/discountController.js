'use strict';

storeApp.controller('DiscountController', ['Discounts', '$rootScope', function(Discounts, $rootScope){
  var self = this;

  self.codeMessage = "";
  self.codeError = false;

  self.discounts = [];
  Discounts.get('discounts/discountcodes.json').success(function(data) {
    self.discounts = data;
  });

  self.checkDiscount = function(code, cart){
    var discountAlreadyApplied = false;
    var isValid = false;
    self._applyDiscount(code);
  };

  self._applyDiscount = function(code){
    if (code !== undefined) {
      for(var i =0; i < self.discounts.length; i++){
        if (self.discounts[i].code === code) {
          var isValid = true;
          self.codeError = true;
          self.codeMessage = "Successfully added voucher code";
          if ($rootScope.totalPrice > self.discounts[i].maxamount) {
            $rootScope.totalPrice -= self.discounts[i].discount * ($rootScope.totalPrice / 100);
          }
        } else if(!isValid) {
          self.codeError = true;
          self.codeMessage = "Voucher code invalid"
        }
      }
    }
  };

}]);
