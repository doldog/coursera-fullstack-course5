(function(){
    'use strict';

    angular.module('MenuApp')
        .controller('CategoryPageController',CategoryPageController);

    CategoryPageController.$inject = ['MenuDataService','categories'];
    function CategoryPageController(MenuDataService,categories){
        let categoryController = this;
        if(categories.data) {
            categoryController.categories = categories.data;
        }

    }
})();