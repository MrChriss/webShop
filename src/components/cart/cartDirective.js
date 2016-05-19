angular.module('webShop').directive('chartDirective', function(){
   return {
       restrict: 'E',
       templateUrl: '../src/components/chart/chart.html',
       scope: {},
       controller: 'chartController'
   } 
});