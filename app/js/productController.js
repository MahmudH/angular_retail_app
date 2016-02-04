'use strict';

/* Controllers */

storeApp.controller('CartController', ['Products', '$rootScope', function(Products, $rootScope) {

  var self = this;
  self.cart = [];
  $rootScope.totalPrice = 0;
  self.products = {};
  self.discounts = {};

  Products.get('products/productlist.json').success(function(data) {
    self.products = data;
  });

  self.addToCart = function (product) {
    var found = false;
    self.cart.length === 0 ? self._emptyIsBasket(product) : self._addToBasket(product, found);
  };

  self.removeFromCart = function(index){
    self.cart.splice(index, 1);
  };

  self._addToBasket = function(product, check){
    for(var i=0; i < self.cart.length; i++){
      if(self.cart[i][0] == product.name){
        self.cart[i][1]++;
        self._decreaseProductQuantity(product);
        check = true;
      }
    }
    if(!check){
      self.cart.push([product.name,1]);
      product.quantity--;
    }
    self._increaseTotalPrice(product);
  };

  self._emptyIsBasket = function(product){
    self.cart.push([product.name,1]);
    self._decreaseProductQuantity(product);
    self._increaseTotalPrice(product);
  };

  self._decreaseProductQuantity = function(product){
    product.quantity--;
  };

  self._increaseProductQuantity = function(product){
    product.quantity++;
  };

  self._increaseTotalPrice = function(product){
    $rootScope.totalPrice += product.price;
  };

}]);
