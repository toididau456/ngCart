app.factory('product', ['$http', function($http) {
    return $http.get('http://192.168.33.13/learn/angular/simpleone/JSON/data.json')
		        .success(function(success) {
		            return success.data;
		        });
}]);