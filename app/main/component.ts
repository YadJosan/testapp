module app.directives {
 
    interface ISomeComponentBindings  {
        textBinding: string;
        dataBinding: number;
        functionBinding: () => any;
        
    }
 
    interface ISomeComponentController extends ISomeComponentBindings {
        add(): void;
    }
 
    class SomeComponentController implements ISomeComponentController {
 
        public textBinding:string;
        public dataBinding:number;
        public functionBinding:() => any;
           
        public static $inject=["$scope"];
        constructor(public $scope:ng.IScope) {           
            this.textBinding = 'hfgdshjfjh';
            this.dataBinding = 0;
        }
 
        add():void {
            //this.functionBinding();
            
            this.$scope.$emit("handleEmit","hello");
        }
        
        
 
    }
 
    class SomeComponent implements ng.IComponentOptions {
 
        public bindings:any;
        public controller:any;
        public templateUrl:string;
 
        constructor() {
            this.bindings = {
                textBinding: '@',
                dataBinding: '<',
                functionBinding: '&'
            };
            this.controller = SomeComponentController;
            this.templateUrl = '/app/main/some-component.html';
        }
 
    }
 
    angular.module('testApp').component('someComponent', new SomeComponent());
 
}