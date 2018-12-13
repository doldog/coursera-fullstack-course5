(function(){
    'use strict';

    angular.module('public')
        .controller('SignUpController',SignUpController);

    SignUpController.$inject = ['UserService','MenuService'];
    function SignUpController(UserService,MenuService){
        let $ctrl = this;
        $ctrl.firstName ="";
        $ctrl.lastName = "";
        $ctrl.emailAddress = "";
        $ctrl.fav = "";
        $ctrl.formClicked = false;
        $ctrl.submitSuccess = false;
        $ctrl.message = "";
        $ctrl.submit = function(){
            var user = {};
            user.firstName = $ctrl.firstName;
            user.lastName = $ctrl.lastName;
            user.email = $ctrl.emailAddress;
            user.fav = $ctrl.fav.toLowerCase();
            $ctrl.formClicked = true;
            UserService.reg(user);
            $ctrl.submitSuccess = true;
            let fav= MenuService.getItemByShortName(user.fav);
            fav.then(function(){
                $ctrl.message = "Your information has been saved";
            }).catch(function(){
                $ctrl.message = "No such menu number exists";
            })
        }

    }
})();