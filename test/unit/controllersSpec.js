'use strict';

/* jasmine specs for controllers go here */
describe('StoreApp controllers', function() {

  describe('productsCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(module('storeApp'));
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('products/products.json').
          respond([{name: 'Almond Toe Court Shoes, Patent Black'}, {name: 'Suede Shoes, Blue'}]);

      scope = $rootScope.$new();
      ctrl = $controller('productsCtrl', {$scope: scope});
    }));


    it('should create "products" model with 2 product names fetched from json', function() {
      expect(ctrl.cards).toBeUndefined();
      $httpBackend.flush();
      expect(ctrl.cards).toEqual([{name: 'Almond Toe Court Shoes, Patent Black'}, {name: 'Suede Shoes, Blue'}]);
    });
  });
});
