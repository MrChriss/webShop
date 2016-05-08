angular.module('webShop').controller('productsDetailController', function($scope, webShopFactory, $stateParams){

 /*   $scope.data = $http.get('http://smartninja.betoo.si/api/eshop/products', {}).then(function(sucess){
        $scope.data = sucess.data;
    }, function(fail){
        alert('products not delivered'); 
    }); */
    
    $scope.productsDetail = webShopFactory.productsArrOfObj.get({id: $stateParams.id});
});