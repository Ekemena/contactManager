angular.module('contactsMgr', ['ngRoute'])

.controller('AppCtrl', function($scope, jsonFilter){
     
})


.filter('truncate', function(){
    return function(input, limit){
      return(input.length > limit)? input.substr(0, limit)+ '..'
      :input;
    };
})

