/*var FriendApp = angular.module('friendApp', []);
// Controller function and passing $http service and $scope var.
FriendApp.controller('FriendController', [ '$scope', '$http',
		function($scope, $http) {
	
	 $scope.getDatanonfrnds = function() {
	    	console.log("get method")
	            $http({
	                    method : 'GET',
	                    url : 'http://localhost:8083/Collbrationproj/getnonfrnds'
	            }).success(function(data, status, headers, config) {
	                    $scope.nonfriends = data;
	            }).error(function(data, status, headers, config) {
	                    // called asynchronously if an error occurs
	                    // or server returns response with an error status.
	            });
	    	
};
      $scope.sendrequest=function(){
    	  
    	  $http({
    		     method:'POST',
    		     url:'http://localhost:8083/Collbrationproj/sendreq/'+userid
    	  }).success(function(data,status,headers,config){
    		  $scope.sendreq=data;
    	  }).error(function(data,status,headers,config){
    		  
    	  });
      }



}]);*/