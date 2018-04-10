var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            controller: "HomeController",
            templateUrl: 'js-angular/views/home.html'
        })
        .when('/product/:id', {
            controller: "ProductController",
            templateUrl: 'js-angular/views/product.html'
        })
        .when('/shopping_cart', {
            controller: "ShoppingCartController",
            templateUrl: 'js-angular/views/shopping_cart.html'
        });
    // configure html5 to get links working on jsfiddle
    $locationProvider.html5Mode(true);
});
