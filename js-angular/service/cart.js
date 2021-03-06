app.run(['$rootScope', 'ngCart', function($rootScope, ngCart) {
    ngCart.init();
}])
.service('ngCart', ['$http', function($http) {
    this.init = function() {
        this.$cart = {
            items: []
        };
    };

    this.addItem = function(id, name, price, img, quantity) {
        let items = this.$cart.items;
        this.$cart.items.push({ id, name, price, img, quantity });
    };

    this.updateItem = function(id) {
        var items = this.$cart.items;
        items.forEach((value, key) => {
            if (value.id == id) {
                let quantity = angular.element(document.querySelector("#quantity_" + id)).val();
                items[key].quantity = Math.abs(quantity);
            }
        });
    };

    this.deleteItem = function(id) {
        var items = this.$cart.items;
        this.$cart.items = items.filter(item => item.id != id);
        angular.element(document.querySelector("#product_" + id)).remove();
    };

    this.priceProduct = function(price, quantity) {
        return parseInt(price) * parseInt(quantity);
    };

    this.totalPrice = function() {
        let items = this.ngCart.$cart.items;
        let total = 0;
        items.forEach(function(element, index) {
            total += (element.quantity * parseFloat(element.price));
        });

        return total;
    };

    this.checkout = function() {
        $http.post('http://192.168.33.14/learn/angular/simpleone/php/save_data.php', {
            product: JSON.stringify(this.$cart.items)
        }).then(
            function(response) {
                console.log(response.data);
            },
            function(error) {
                console.log(error);
            }
        );
    };
}]);