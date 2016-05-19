angular.module('webShop').controller('cartController', function($scope, webShopFactory, locker, $http){
    
    $scope.productsToBuy = locker.namespace('user').get('productsWantToBuy', []);
    $scope.productsToBuySaveArray = [];
    
    $scope.showProductsToBuy = function () {
      if($scope.productsToBuy.length > 0) {
          return true;
      } else {
          return false;
      }
    };
    
    $scope.alertAddToCart = function(){
        
    };

    $scope.removeProduct = function (productToRemove) {
        $scope.productsToBuySaveArray = $scope.productsToBuy;
        locker.namespace('user').forget('productsWantToBuy');
        
        var index = $scope.productsToBuySaveArray.indexOf(productToRemove);
        $scope.productsToBuySaveArray.splice(index, 1);
        
        locker.namespace('user').put('productsWantToBuy', $scope.productsToBuySaveArray);
    }; 
    // works, trouble with productsDetail array of products chosen
    // should moooove to factory
    
    $scope.totalPrice = 0;    
    $scope.priceSum = function(){
        var sum = 0;
        for (item in $scope.productsToBuy){
            sum += $scope.productsToBuy[item].price;
        };
        return sum;
    };
    // submit function does not work
    $scope.submit = function(formInput){
        if ($scope.user.$valid) {
            alert('Sucessfully submitted, have a nice day!');
            $http.post('http://smartninja.betoo.si/api/eshop/orders');
        } else {
            alert('Did you remember to fill out all the form fileds?');
        }
    };

});