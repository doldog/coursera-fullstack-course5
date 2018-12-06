(function(){
    'use strict';

    angular.module('MenuApp')
        .component('menuCategories',{
            templateUrl:'src/MenuApp/templates/menuCategories.template.html',
            bindings:{
                categories:'<'
            }

        });
})();
