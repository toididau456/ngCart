app.controller('ShoppingCartController', ['$scope', 'ngCart', 'product', '$routeParams', function($scope, ngCart, product, $routeParams) { 
    $scope.ngCart = ngCart;
    $scope.products = ngCart.$cart.items;
    $scope.total = ngCart.totalPrice;
}]);