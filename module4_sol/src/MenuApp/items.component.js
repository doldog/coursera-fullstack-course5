(function(){
    'use strict';

    angular.module("MenuApp")
        .component('itemsComponent',{
            templateUrl:"src/MenuApp/templates/menuDetail.template.html",
            bindings:{
                menuItems:"<"
            }
        });


})();