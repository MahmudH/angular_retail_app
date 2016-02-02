var storeApp = angular.module('storeApp', [
  'ngRoute',
  'ngResource'
]);

storeApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/products', {
        templateUrl: 'partials/product-list.html'
      }).
      when('/cart', {
        templateUrl: 'partials/cart-list.html'
      }).
      otherwise({
        redirectTo: '/products'
      });
  }
]);
