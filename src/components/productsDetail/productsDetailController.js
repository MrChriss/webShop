angular.module('webShop').controller('productsDetailController', function($scope, $rootScope, webShopFactory, $stateParams, locker){
    
    $scope.productsDetail = webShopFactory.productsArrOfObj.get({id: $stateParams.id});
    $scope.productsCart = webShopFactory.productsToBuy;
    
    $scope.addProductCart = webShopFactory.addProductCart;
});