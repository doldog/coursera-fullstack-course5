(function(){
    'use strict';

    angular.module("MenuApp")
        .component('itemsComponent',{
            templateUrl:"src/MenuApp/templates/menuDetail.template.html",
            controller: MenuItemController,
            bindings:{
                categoryShortName:'<'
            }
        });

    MenuItemController.$inject = ['MenuDataService'];
    function MenuItemController(MenuDataService){
        let $ctrl = this;
        $ctrl.items = [];

        $ctrl.$onInit = function(MenuDataService){
            let itemByCategoryPromise = MenuDataService.getItemsForCategory
        }
    }


})();