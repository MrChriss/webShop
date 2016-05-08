angular.module('webShop').config(function($stateProvider, $urlRouterProvider){

    //  If a user goes to an url that doesn't have a valid state assigned
	$urlRouterProvider.otherwise('/error');
    
     $stateProvider.state('error', 
    {
        url: '/error',
        template: '<h2>Sorry this site is still being developed</h2>'
    })
    
	$stateProvider.state('home',
	{
		url: '/home',
		templateUrl: '../src/components/home/home.html'
	});

	$stateProvider.state('products',
	{
		url: '/products',
		templateUrl: '../src/components/products/products.html'
	});
    
    $stateProvider.state('productsDetail', {
        url: '/products/:id',
        templateUrl: '../src/components/productsDetail/productsDetail.html',
        controller: 'productsDetailController'
    });

	$stateProvider.state('categories',
	{
		url: '/categories',
		templateUrl: '../src/components/categories/categories.html',
	});
    
    $stateProvider.state('about',
	{
		url: '/about',
		template: "<h2 style='text-align: center'>This is what we are about!</h2><br /><br /><br />"
    });
    
/*    $stateProvider.state('product', 
    {
        url: '/product/:name',
        template: '<h2>The name of this product is {{ name }}</h2>'
    }); */
    
     $stateProvider.state('cart', 
    {
        url: '/cart',
        template: '<h2>cart</h2>'
    })

	/*$stateProvider.state('parent',
	{
		url: '/parent',
		template: '<h1>Parent state <span class="text-muted"><small>Has an additional ui-view.</small></span></h1><ui-view></ui-view>'
	});

	$stateProvider.state('parent.child', 
	{
		url: '/child',
		template: '<div class="well"><h4>Child state</h4></div>'
	})

	$stateProvider.state('parameter', {
		url: '/parameter/:name',
		template: '<h1>Parameter state with a name parameter</h1><p>Name is : {{ name }}</p>',
		controller: function($scope, $stateParams, $state){
            //  Use $stateParams to get url parameters
            $scope.name = $stateParams.name;

            //  If you want to redirect to a state
            //  $state.go('login');

            //  If you want to reload a state
			//  $state.reload();

            //  Check if the current active state is...
            // $state.is('login');
		}
	});
*/
});

