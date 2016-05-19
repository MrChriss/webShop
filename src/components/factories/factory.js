angular.module('webShop').factory('webShopFactory', function($resource, locker){
    
    var productsToBuy = [];
    
    return {
        categories: $resource('http://smartninja.betoo.si/api/eshop/categories'),
        productsArrOfObj: $resource('http://smartninja.betoo.si/api/eshop/products/:id'),
        productsToBuy: productsToBuy,
        
        addProductCart: function(selectedProduct){
            productsToBuy.push(selectedProduct);
            locker.namespace('user').put('productsWantToBuy', productsToBuy);
        },
        // delete product from cart function should go here
    }

        
});