(function(){
    'use strict';

    angular.module('public')
        .controller('MyInfoController',MyInfoController);

    MyInfoController.$inject = ['UserService','MenuService'];

    function MyInfoController(UserService,MenuService){
        let myInfo = this;
        myInfo.user = UserService.getUser();
        myInfo.message = "Not Signed Up ";
        myInfo.registered = true;
        if(myInfo.user){
           let itemPromise = MenuService.getItemByShortName(myInfo.user.fav);
           itemPromise.then(function(response) {
               myInfo.menuItem = response.data;
           });
        }else {
            myInfo.registered = false;
        }

    }
})();