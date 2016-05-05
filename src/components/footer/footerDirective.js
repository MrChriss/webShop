angular.module('webShop').directive('footerDirective', function(){
    return {
        restrict: 'E',
        templateUrl: '../src/components/footer/footer.html',
        scope: {},
        controller: 'footerController'
    };
});