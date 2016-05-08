angular.module('webShop').controller('productsController', function($scope, productsFactory){
    
    $scope.products = productsFactory.productsArrOfObj.query({});
    $scope.categories = productsFactory.categories.query({});
    
});