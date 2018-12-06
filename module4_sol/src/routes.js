(function(){
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider,$urlRouterProvider){
        //Default webpage when requested url cannot be found
        $urlRouterProvider.otherwise('/');

        //
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl:'src/MenuApp/templates/home.template.html'
            })
            .state('categories',{
                url:'/categories',
                templateUrl:'src/MenuApp/templates/categoryPage.template.html',
                controller: 'CategoryPageController as menuCategory',
                resolve:{
                    categories:['MenuDataService',function(MenuDataService){
                        return MenuDataService.getAllCategories();
                    }]
                }

            })
            .state('menuItems',{
                url:'/menu-detail/{shortName}',
                templateUrl:'src/MenuApp/templates/menuDetailPage.template.html',
                controller:'MenuDetailController as menuDetail',
                resolve:{
                    items:['$stateParams','MenuDataService',($stateParams,MenuDataService)=>{
                        return MenuDataService.getItemsForCategory($stateParams.shortName);
                    }]
                }
            })
    }
})();