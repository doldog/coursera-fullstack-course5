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
            searchTerm = searchTerm || "";
            let deferred = $q.defer();
            let promise = this.getMenuItems();
            promise.then(function(response){
                let items = response.data.menu_items;
                let matchedItems = [];
                for(let i = 0; i<items.length; i++){
                    let name = items[i].name;
                    if(name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1){
                        matchedItems.push(items[i]);
                    }
                }
                if(matchedItems.length === 0) deferred.reject("No match found");
                else deferred.resolve(matchedItems);
            }).catch(function(error){
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
        controller.getMatchedMenuItems = () =>{
            console.log("c.st: "+controller.searchTerm);
            let promise = MenuSearchService.getMatchedMenuItems(controller.searchTerm);
            promise.then(function(response){
                controller.found = response;
                for(let i = 0; i<controller.found.length; i++){
                    console.log(controller.found[i].name);
                }
            })
                .catch(function(error){
                    console.log(error);
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