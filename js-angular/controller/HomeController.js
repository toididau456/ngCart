app.controller('HomeController', ['$scope', 'product', 'cart', function ($scope, product, cart) {
	product.success(function(data){
		$scope.products = data;
	});
	cart.quantity = 5;
	console.log(cart);
}]);