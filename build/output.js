var main = angular.module("testApp", ["ngMaterial", "ui.router"]);
main.config(routeConfig);
routeConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider.state("/", {
        url: "/",
        templateUrl: "/app/main/main.html",
        controller: "ProController as vm"
    });
    $urlRouterProvider.otherwise("/");
}
var app;
(function (app) {
    var directives;
    (function (directives) {
        var SomeComponentController = (function () {
            function SomeComponentController($scope) {
                this.$scope = $scope;
                this.textBinding = 'hfgdshjfjh';
                this.dataBinding = 0;
            }
            SomeComponentController.prototype.add = function () {
                //this.functionBinding();
                this.$scope.$emit("handleEmit", "hello");
            };
            SomeComponentController.$inject = ["$scope"];
            return SomeComponentController;
        }());
        var SomeComponent = (function () {
            function SomeComponent() {
                this.bindings = {
                    textBinding: '@',
                    dataBinding: '<',
                    functionBinding: '&'
                };
                this.controller = SomeComponentController;
                this.templateUrl = '/app/main/some-component.html';
            }
            return SomeComponent;
        }());
        angular.module('testApp').component('someComponent', new SomeComponent());
    })(directives = app.directives || (app.directives = {}));
})(app || (app = {}));
var app;
(function (app) {
    var pro;
    (function (pro) {
        var ProController = (function () {
            function ProController($scope, $mdDialog) {
                this.$scope = $scope;
                this.$mdDialog = $mdDialog;
                $scope.$on('handleEmit', function (event, args) {
                    alert(args);
                });
            }
            ProController.prototype.call = function () {
                alert();
            };
            ProController.$inject = ["$scope", "$mdDialog"];
            return ProController;
        }());
        angular
            .module("testApp")
            .controller("ProController", ProController);
    })(pro = app.pro || (app.pro = {}));
})(app || (app = {}));
