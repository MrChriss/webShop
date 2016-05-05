/*angular.module('webShop').factory('webShopFactory', function($q, $http){
    
    var getDataa = $http.get('http://smartninja.betoo.si/api/eshop/products', {}).then(function(success){
       var getDataa = success.data;
    }, function(fail){
        alert('products not delivered'); 
    });
    
    return {
        getData: getDataa
    };
}); */