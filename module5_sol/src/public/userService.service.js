(function(){
    'use strict';

    angular.module('public')
        .service('UserService',UserService);

    UserService.$inject = ['ApiPath'];
    function UserService($http,$q,ApiPath){
        let userService = this;
        let users = [];
        userService.reg = function(user){
            users.push(user);
            console.log(users);
        };
        userService.retrieve = function(name){
            for(let i = 0; i<users.length; i++){
                if ((name.firstName === users[i].firstName) && (name.lastName === users[i].lastName) && (name.email === users[i].lastName)){
                    return users[i];
                }
            }
            return null;
        };
        userService.getUser = function(){
            if(users.length !== 0){
                return users[0];
            }
        }

    }
})();