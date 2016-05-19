angular.module('webShop').config(function(lockerProvider) {
   
    lockerProvider.defaults({
        driver: 'local',
        namespace: 'webShop'
        
    });
});