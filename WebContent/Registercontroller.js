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
		    

        
		} ]);
