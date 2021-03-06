(function(){
    'use strict';

    angular.module('Data')
        .service('MenuDataService',MenuDataService);

    MenuDataService.$inject = ['$http'];
    function MenuDataService($http){
        MenuDataService.menudata = this;
        MenuDataService.errorMessag = "";

        this.getAllCategories = ()=>{
            return $http({
                method: "GET",
                url:("https://davids-restaurant.herokuapp.com/categories.json")
            });
        };

        this.getItemsForCategory = (categoryShortName)=>{
            return $http({
                method:"GET",
                url:("https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName)
            });
        };
    }
})();