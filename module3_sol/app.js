(function(){
    'use strict';

    angular.module('NarrowItDownApp',[])
        .controller('NarrowItDownController',NarrowItDownController)
        .service('MenuSearchService',MenuSearchService)
        .directive('foundItems',FoundItemsDirective);


    MenuSearchService.$inject = ['$http','$q'];
    function MenuSearchService($http,$q){
        const service = this;
        service.getMatchedMenuItems = (searchTerm)=>{
                let deferred = $q.defer();
                if (!searchTerm) deferred.reject("Please enter a name to search");
                let promise = this.getMenuItems();
                promise.then(function (response) {
                    let items = response.data.menu_items;
                    let matchedItems = [];
                    for (let i = 0; i < items.length; i++) {
                        let name = items[i].name;
                        if (name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
                            matchedItems.push(items[i]);
                        }
                    }
                    if (matchedItems.length === 0) deferred.reject("No match found");
                    else deferred.resolve(matchedItems);
                }).catch(function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;

        };

        service.getMenuItems = ()=>{
                return $http({
                    method: "GET",
                    url:("https://davids-restaurant.herokuapp.com/menu_items.json")
                });
        };

    }



    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService){
        const controller = this;
        controller.searchTerm = "";
        controller.found = [];
        controller.hasError = false;
        controller.errorMessage = "";
        controller.getMatchedMenuItems = () =>{

            let promise = MenuSearchService.getMatchedMenuItems(controller.searchTerm);
            promise.then(function(response){
                controller.found = response;
                controller.hasError = false;
                controller.errorMessage = "";

            })
                .catch(function(error){
                    controller.hasError = true;
                    controller.errorMessage = error;
                });
        };
        controller.removeItem = function(itemIndex){
            console.log("index is: "+itemIndex);
            if(itemIndex<controller.found.length){
                controller.found.splice(itemIndex,1);
            }
            console.log(controller.found);
        }


    }

    function FoundItemsDirective() {
        return {
            templateUrl: 'found.html',
            restrict:'E',
            scope: {
                foundItems:'=',
                onRemove: '&'
            },
        };
    }




})();