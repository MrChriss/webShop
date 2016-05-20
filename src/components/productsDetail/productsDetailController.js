angular.module('webShop').controller('productsDetailController', function($scope, $rootScope, webShopFactory, $stateParams, locker, $timeout){
    
    $scope.productsDetail = webShopFactory.productsArrOfObj.get({id: $stateParams.id});
    
    $scope.alertOnClick = false;
    
    $scope.alertOnClickFunct = function(){
        $timeout(function(){
        $scope.alertOnClick = true;
        }, 100);
        $timeout(function(){
        $scope.alertOnClick = false;
        }, 3000);
        
                                        };
    $scope.productsToCart = [];
    
    $scope.quantity = 0;
    
    $scope.addProduct = function(){
        if($scope.quantity == 0){
            alert('You have not selected the quantity you wish to buy!');
        } else {
            $scope.productsToCart = locker.namespace('user').get('productsWantToBuy', []);        
            $scope.productsDetail.quantity = $scope.quantity;

            $scope.productsToCart.push($scope.productsDetail);
            locker.namespace('user').forget('productsWantToBuy');

            locker.namespace('user').put('productsWantToBuy', $scope.productsToCart);
        }
    };
    // should mooooove to factory
    
    $scope.addOneQuantity = function(){
        $scope.quantity += 1;
        return $scope.quantity;
    };
    
    $scope.decreaseOneQuantity = function(){
        if ($scope.quantity > 0){
            $scope.quantity -= 1;
        }
        return $scope.quantity;
    };
});