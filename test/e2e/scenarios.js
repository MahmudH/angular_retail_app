describe('storeApp', function() {

  it('should redirect index.html to index.html#/cards', function() {
    browser.get('app/index.html');
    browser.getLocationAbsUrl().then(function(url) {
      expect(url).toEqual('/products');
    });
  });

  describe('Product list view', function() {

    beforeEach(function() {
      browser.get('app/index.html#/products');
    });



  });

});
