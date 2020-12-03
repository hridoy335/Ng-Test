angular.module('MyApp.controllers', [])
    .controller("MyCtrll", function ($scope) {
        $scope.message = "Hello I am Hridoy";

        $scope.Squ = function (value) {
            return value * value;
        }
    })

    .controller("MyCtrll2", function ($scope) {

        $scope.message2 = "IUBAT";
        $scope.repet = ['Mango', 'Jakfrood', 'Apple'];
    })
    .controller("MyCtrll3", function ($scope) {

        $scope.alertshow = function () {
            alert("Yes here it is ..")
        };
    });
    

