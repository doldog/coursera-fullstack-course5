(function(){
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider','urlRouterProvider'];
    function RoutesConfig($stateProvider,$urlRouterProvider){
        //Default webpage when requested url cannot be found
        $urlRouterProvider.otherwise('/');

        //
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl:'src/MenuApp/templates/home.template.html'
            })
    }
})();