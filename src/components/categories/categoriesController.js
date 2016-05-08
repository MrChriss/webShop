angular.module('webShop').controller('categoriesController', function($scope, webShopFactory){
   
    $scope.categoriess = webShopFactory.categories.query({});
    
});