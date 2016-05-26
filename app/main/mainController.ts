module app.pro{

    class ProController {
        
        public static $inject = ["$scope","$mdDialog"];
        constructor(public $scope:ng.IScope,public $mdDialog: angular.material.IDialogService) {
                  this.$scope.$on('handleEmit', function(event, args) {
                        alert(args);
                    });      
        }
        call(){
            alert();
            
        }        
    
    }
    angular
		.module("testApp")
		.controller("ProController",
			ProController);
    
}