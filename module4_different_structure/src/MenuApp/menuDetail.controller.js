(function(){
    'use strict';

    angular.module("MenuApp")
        .controller('MenuDetailController',MenuDetailController);

    MenuDetailController.$inject = ['MenuDataService','items'];
    function MenuDetailController(MenuDataService,items){
        let menuDetail = this;
        menuDetail.foundCategory = false;
        if(items){
            menuDetail.menuItems = items.data.menu_items;
            menuDetail.foundCategory = true;
        }
    }
})();