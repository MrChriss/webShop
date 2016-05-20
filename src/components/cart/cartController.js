angular.module('webShop').controller('cartController', function($scope, webShopFactory, locker, $http, $timeout){
    
    $scope.productsToBuy = locker.namespace('user').get('productsWantToBuy', []);
    $scope.productsToBuySaveArray = [];
    
    $scope.showProductsToBuy = function () {
      if($scope.productsToBuy.length > 0) {
          return true;
      } else {
          return false;
      }
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
            sum += $scope.productsToBuy[item].price * $scope.productsToBuy[item].quantity;
        };
        $scope.formData.price = sum.toFixed(2);
        return sum;
    };
    // submit function does not work
    $scope.submit = function(){
            $http.post('http://smartninja.betoo.si/api/eshop/orders', $scope.formData).then(function(success){
                alert('Success, thank you for your purchase. Have a nice day!');}, function(error){
                alert('Ooops something went wrong, we apoligise!');
            });
    };
    
        $scope.timeoutTestFunct = function(){
        $timeout(function(){
        $scope.timeoutTest = true;
        }, 100);
        $timeout(function(){
        $scope.timeoutTest = false;
        }, 3000);
                                        };
    $scope.formData = {};
    
    
    $scope.productInfoToSubmit = function(){
        
        $scope.formData.products = [];
        
        for (property in $scope.productsToBuy){
            var salesData = {};
            salesData.id = $scope.productsToBuy[property].id;
            salesData.quantity = $scope.productsToBuy[property].quantity;
            $scope.formData.products.push(salesData);
        };        
    };

});