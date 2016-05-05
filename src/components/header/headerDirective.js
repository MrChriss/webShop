angular.module('webShop').directive('headerDirective', function(){
    return {
        restrict: 'E',
        templateUrl: '../src/components/header/header.html',
        scope: {},
        controller: 'headerController'
    };
});