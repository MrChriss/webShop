angular.module('webShop').controller('homeController', function($scope, $q, $http){

    $scope.data = $http.get('http://smartninja.betoo.si/api/eshop/products', {}).then(function(sucess){
        $scope.data = sucess.data;
    }, function(fail){
        alert('products not delivered'); 
    });
});