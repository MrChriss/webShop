angular.module('webShop').directive('navigationDirective', function(){
    return {
        restrict: 'E',
        templateUrl: '../src/components/navigation/navigation.html',
        scope: {},
        controller: 'navigationController'
    };
});