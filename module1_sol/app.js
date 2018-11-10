const thresholdForTooMuch = 3;

(function(){
    'use strict';
    angular.module('LunchCheck',[]).controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope){
        $scope.message = "";
        $scope.inputTextBox = "";
        $scope.check = ()=>{
            let input = $scope.inputTextBox;
            if (input === ""){$scope.message = "Please enter data first "}
            else {
                let inputArray = input.split(",");
                let count = 0;
                let message = "Enjoy";
                for (let i = 0; i < inputArray.length; i++) {
                    if (inputArray[i].trim() !== "") {
                        count++;
                    }
                }
                count > thresholdForTooMuch ? message = "Too much" : "Enjoy";
                $scope.message = message;
            }
        }

    }


})();