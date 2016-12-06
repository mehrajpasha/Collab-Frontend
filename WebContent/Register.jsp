<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel="stylesheet"
	href="http://netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js">"></script>
<script type="text/javascript" src="Registercontroller.js"></script>

</head>
<body ng-app="registerApp" ng-controller="RegisterController">
	<div class="container">
		<div class="col-sm-8 col-sm-offset-2">
			<div class="page-header">
				<h1>Post data of Blog</h1>
			</div>
			<!-- FORM -->
			<form data-ng-submit="submit()">
				<div class="form-group">
        <label>USER ID</label>
        <input type="text"  class="form-control" ng-model="userid">
    </div> 
				<div class="form-group">
					<label>USERNAME</label> <input type="text" class="form-control"
						data-ng-model="username">
				</div>
				<div class="form-group">
					<label>PASSWORD</label> <input type="text" class="form-control"
						data-ng-model="password">
				</div>
				
				<div class="form-group">
					<label>ROLE</label> <input type="text" class="form-control"
						data-ng-model="role">
				</div>
				
				<div class="form-group">
					<label>MOBILE</label> <input type="text" class="form-control"
						data-ng-model="mobile">
				</div>
				
				<div class="form-group">
					<label>ADDRESS</label> <input type="text" class="form-control"
						data-ng-model="address">
				</div>
				
				<button type="submit" class="btn btn-primary">Submit</button>
			</form>
			</div>
			</div>
			</body>
			</html>
			