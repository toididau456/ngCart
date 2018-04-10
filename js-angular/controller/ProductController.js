app.controller('ProductController', ['$scope', 'ngCart', 'product', '$routeParams', function($scope, ngCart, product, $routeParams) {
    product.then(function(data) {
        $scope.product = data[$routeParams.id];
    });
    
    $scope.ngCart = ngCart;
}]);