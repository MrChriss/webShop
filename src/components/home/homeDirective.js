angular.module('webShop').directive('homeDirective', function(){
    return {
        restrict: 'E',
        templateUrl: '../src/components/home/home.html',
        scope: {},
        controller: 'homeController'
    };
});