var ForumApp = angular.module('forumApp', []);
// Controller function and passing $http service and $scope var.
ForumApp.controller('ForumController', [ '$scope', '$http','$location','$rootScope',
		function($scope, $http,$location,$rootScope) {

    $scope.getDataFrom = function() {
    	console.log("get method")
            $http({
                    method : 'GET',
                    url : 'http://localhost:8083/Collbrationproj/getforum'
            }).success(function(data, status, headers, config) {
                    $scope.forums = data;
            }).error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
            });

    };
			// calling our submit function.
			$scope.submitform = function() {
				console.log("save blog")
				// create a blank object to handle form data.
				$scope.forum ={ 
				    forumid   : $scope.forumid,
					forumname : $scope.forumname,
					forumdesc : $scope.forumdesc
				};
				$http({
					method : 'POST',
					url : 'http://localhost:8083/Collbrationproj/postforum',
					data : $scope.forum
				// forms user object

				}).success(function(data, status, config) {
                    $scope.forumid ='';
  					$scope.forumname = '';
					$scope.forumdesc = '';
				});

			};
		    $scope.getdata = function(forumid) {
                $http({
                        method : 'DELETE',
                        url : 'http://localhost:8083/Collbrationproj/delforum/'+forumid
                }).success(function(data, status, headers, config) {
                        $scope.getDataFrom;
                }).error(function(data, status, headers, config) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                });

        };
        
        $scope.editforum = function(forumid) {
          
        	$http({
                    method : 'GET',
                    url : 'http://localhost:8083/Collbrationproj/editforum/'+forumid
            }).success(function(data, status, headers, config) {
                    $scope.forumname=data.forumname;
                    $scope.forumid=data.forumid;
                    $scope.forumdesc=data.forumdesc;
            }).error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
            });

    };
$scope.getforum=function(id){
		
		console.log("iforum")
		$http({
			method: "GET",
			url:'http://localhost:8083/Collbrationproj/individualforum/'+id,
		}).success(function(data,status,headers,config){
			$location.path('/individualforum');
			$rootScope.individualforums=data;
			console.log(data)
		}).error(function(data, status, headers, config) {
			alert("Error");
		});
	}
    
		} ]);
