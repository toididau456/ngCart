app.run(['$rootScope', 'ngCart', function($rootScope, ngCart){
    ngCart.init();
}])
.service('ngCart', [function() {
    var total = 0;
    this.init = function(){
        this.$cart = {
            items: []
        };
    };
   
    this.addItem = function(id, name, price, img, quantity) {
        let items = this.$cart.items;
        this.$cart.items.push({id, name, price, img, quantity});
    };

    this.priceProduct = function(price, quantity){
        return parseInt(price) * parseInt(quantity);
    }
    
    this.totalPrice = function() {
        let items = this.ngCart.$cart.items;
        var total = 0;
        items.forEach(function(element, index) {
            total += (element.quantity * parseFloat(element.price));
        });
        return total;
    };

}]);