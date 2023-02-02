(function(){
    'use strict';

    angular.module('myFirstAngularApp', [])
    .controller('myFirstController',function($scope){
        $scope.name ="";
        $scope.totalValue =0;
        
        
        $scope.displayNumiric = function(){
            var totalNameValue = calculateNameValue($scope.name);
            $scope.totalValue = totalNameValue;
        }

        function calculateNameValue (x){
            var totalStringNamevalue=0;

            for(var i=0; i< x.length; i++){
                totalStringNamevalue += x.charCodeAt(i);
            }

            return totalStringNamevalue;

        }
    });
})();