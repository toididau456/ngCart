app.controller('HomeController', ['$scope', 'product', 'ngCart', function ($scope, product, ngCart) {
	product.then(function(data){
		$scope.products = data;
	});

	$scope.total = ngCart.totalPrice;
	$scope.ngCart = ngCart;

}]);