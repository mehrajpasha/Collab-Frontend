var RegisterApp = angular.module('registerApp', []);
// Controller function and passing $http service and $scope var.
RegisterApp.controller('RegisterController', [ '$scope', '$http',
		function($scope, $http) {

			// calling our submit function.
			$scope.submit = function() {
				// create a blank object to handle form data.
				$scope.register = {
					userid : $scope.userid,
					username : $scope.username,
					role     : $scope.role,
				password : $scope.password,
				mobile : $scope.mobile,
				address : $scope.address
				};
				$http({
					method : 'POST',
					url : 'http://localhost:8083/Collbrationproj/postuser',
					data : $scope.register
				// forms user object

				}).success(function(data, status, config) {

					$scope.userid = '';
					$scope.username = '';
					$scope.role='';
					$scope.password='';
					$scope.mobile='';
					$scope.address='';
					
				});

			};
		    

		$scope.currentuser=function(){
			
			console.log("oneuser")
			$http({
				method:'GET',
				url:'http://localhost:8083/Collbrationproj/oneuser'
			}).success(function(data,status,headers,config){
				$scope.oneuser=data;
				$scope.img = data.image
			})
		};
		$scope.uploadFile = function(files) {
		    var image = new FormData();
		    //Take the first selected file
		    image.append("file", files[0]);

		    $http.post('http://localhost:8083/Collbrationproj/imageUpload', image, {
		        withCredentials: true,
		        headers: {'Content-Type': undefined },
		        transformRequest: angular.identity
		    }).success(function(data, status, headers, config) {
				alert("success")
				 $scope.reloadPage = function()                                                
	                   {
	                     $window.location.reload();
	                   }
				console.log(image)
			}).error(function(data, status, headers, config) {
				alert("error")
			});

		};
        
		} ]);
