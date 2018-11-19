(function(){
    'use strict';



    angular.module('ShoppingListCheckOff',[])
        .controller('ToBuyController',ToBuyController)
        .controller('AlreadyBoughtController',AlreadyBoughtController)
        .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        const toBuy = this;
        toBuy.items= ShoppingListCheckOffService.getToBuyItems();
        toBuy.buy = function (index) {
            ShoppingListCheckOffService.buy(index);
        }
    }
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
        const bought = this;
        bought.items = ShoppingListCheckOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService(){
        const checkOffService = this;
        let boughtItemList = [];
        let toBuyItemList = [
            {
                name:"Diet Coke",
                quantity:10
            },{
                name:"Carrot",
                quantity:5
            },{
                name:"Chips",
                quantity:100
            },{
                name:"Nintendo Switch",
                quantity:1
            },{
                name:"Beef Steak",
                quantity:5
            }
        ];
        checkOffService.buy = function(index){
            let item = toBuyItemList[index];
            toBuyItemList.splice(index,1);
            boughtItemList.push(item);
            console.log(boughtItemList);
        };

        checkOffService.getToBuyItems = function(){
            return toBuyItemList;
        };
        checkOffService.getBoughtItems = function(){
            return boughtItemList;
        };



    }

})();