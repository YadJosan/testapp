
	var main = angular.module("testApp",
		["ngMaterial","ui.router"]);

	main.config(routeConfig);

	routeConfig.$inject = ["$stateProvider","$urlRouterProvider"];
	function routeConfig($stateProvider: ng.ui.IStateProvider,$urlRouterProvider: ng.ui.IUrlRouterProvider):void{

		$stateProvider.state("/",{
            url:"/",
            templateUrl:"/app/main/main.html",
            controller:"ProController as vm"
        });
        
		$urlRouterProvider.otherwise("/");
            
	}
