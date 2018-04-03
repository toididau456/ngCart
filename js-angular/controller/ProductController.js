app.controller('ProductController', ['$scope', 'product', 'cart', '$routeParams', function($scope, product, cart, $routeParams) {
    product.success(function(data) {
        $scope.product = data[$routeParams.id];
    });
    cart.quantity = 2;
    console.log(cart);

}]);