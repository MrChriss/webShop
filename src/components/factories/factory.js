/* WILL KEEP HERE FOR HYSTORICAL REASONS :) + MAYBE NEED IT LATERZZZ */

angular.module('webShop').factory('webShopFactory', function($resource){
    
    
    return {
        categories: $resource('http://smartninja.betoo.si/api/eshop/categories'),
        productsArrOfObj: $resource('http://smartninja.betoo.si/api/eshop/products/:id')
    }
        
});