angular.module('webShop').factory('productsFactory', function($resource){
    
    return {
        categories: $resource('http://smartninja.betoo.si/api/eshop/categories'),
        productsArrOfObj: $resource('http://smartninja.betoo.si/api/eshop/products/:id')
    };
});