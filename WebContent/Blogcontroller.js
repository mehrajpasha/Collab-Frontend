var BlogApp = angular.module('blogApp', []);
// Controller function and passing $http service and $scope var.
BlogApp.controller('BlogController', [ '$scope', '$http',
		function($scope, $http) {

    $scope.getDataFromServer = function() {
    	console.log("get method")
            $http({
                    method : 'GET',
                    url : 'http://localhost:8083/Collbrationproj/getdata'
            }).success(function(data, status, headers, config) {
                    $scope.blogs = data;
            }).error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
            });

    };
			// calling our submit function.
			$scope.submitForm = function() {
				console.log("save blog")
				// create a blank object to handle form data.
				$scope.blog ={ 
				    blogid   : $scope.blogid,
					blogname : $scope.blogname,
					blogdescription : $scope.blogdescription
				};
				$http({
					method : 'POST',
					url : 'http://localhost:8083/Collbrationproj/pattern',
					data : $scope.blog
				// forms user object

				}).success(function(data, status, config) {
                    $scope.blogid ='';
  					$scope.blogname = '';
					$scope.blogdescription = '';
				});

			};
		    $scope.getdatafrom = function(blogid) {
                $http({
                        method : 'DELETE',
                        url : 'http://localhost:8083/Collbrationproj/delblog/'+blogid
                }).success(function(data, status, headers, config) {
                        $scope.getDataFromServer;
                }).error(function(data, status, headers, config) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                });

        };
        
        $scope.editblog = function(blogid) {
          
        	$http({
                    method : 'GET',
                    url : 'http://localhost:8083/Collbrationproj/editblog/'+blogid
            }).success(function(data, status, headers, config) {
                    $scope.blogname=data.blogname;
                    $scope.blogid=data.blogid;
                    $scope.blogdescription=data.blogdescription;
            }).error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
            });

    };

    $scope.accessForum = function(b_userid) {
		if($scope.userid==b_userid)
		{
			return true;
		}
		else
		{
			return false;
		}
	}
		} ]);
