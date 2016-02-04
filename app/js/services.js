storeApp.factory('Products', ['$http',
  function($http){
    var service = {
      get: get
    };
    return service
      function get () {
        return $http.get('products/productlist.json');
      }
    }
]);

storeApp.factory('Discounts', ['$http',
  function($http){
    var discountService = {
      get: get
    };
    return discountService
      function get () {
        return $http.get('discounts/discountcodes.json');
      }
    }
]);
