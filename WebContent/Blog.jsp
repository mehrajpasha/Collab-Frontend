<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet"
	href="http://netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js">"></script>
<script type="text/javascript" src="Blogcontroller.js"></script>

</head>
<body ng-app="blogApp" ng-controller="BlogController" style="background-image: url('WebContent/images/zljL6J9.jpg');">
	<div class="container">
		<div class="col-sm-8 col-sm-offset-2">
			<div class="page-header">
				<h1>Post data of Blog</h1>
			</div>
			<!-- FORM -->
			<form data-ng-submit="submitForm()">
				<div class="form-group">
        <label>Id</label>
        <input type="text"  class="form-control" ng-model="blogid" ng-show="blogid" ng-disabled="true">
    </div> 
				<div class="form-group">
					<label>Name</label> <input type="text" class="form-control"
						data-ng-model="blogname">
				</div>
				<div class="form-group">
					<label>Description</label> <input type="text" class="form-control"
						data-ng-model="blogdescription">
				</div>
				<button type="submit" class="btn btn-primary">Submit</button>
			</form>

			<table class="table table-bordered table-hover" ng-init="getDataFromServer()">
				<thead>
					<tr>
					    <th>Blog Id</th>
						<th>Blog Name</th>
						<th>Blog Description</th>
						<th>Delete</th>
						<th>Edit</th>
					</tr>
				</thead>
				<tbody>
					<tr ng-repeat="blog in blogs">
					    <td>{{ blog.blogid }}</td>
						<td>{{ blog.blogname }}</td>
						<td>{{ blog.blogdescription }}</td>
					  <td><button ng-click="getdatafrom(blog.blogid)">Delete</button></td>
					  <td><button ng-click="editblog(blog.blogid)">Edit</button></td>
					  </tr>
					  
			</table>	
			
		</div>
	</div>
</body>

</html>