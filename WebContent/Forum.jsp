<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet"
	href="http://netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css">
<script type="text/javascript" src="Forumcontroller.js"></script>

</head>
<body ng-app="forumApp" ng-controller="Forumcontroller">
	<div class="container">
		<div class="col-sm-8 col-sm-offset-2">
			<div class="page-header">
				<h1>Post data of Forum</h1>
			</div>
			<!-- FORM -->
			<form data-ng-submit="submitform()">
				<div class="form-group">
        <label>Id</label>
        <input type="text"  class="form-control" ng-model="forumid" ng-show="forumid" ng-disabled="true">
    </div> 
				<div class="form-group">
					<label>Name</label> <input type="text" class="form-control"
						data-ng-model="forumname">
				</div>
				<div class="form-group">
					<label>Description</label> <input type="text" class="form-control"
						data-ng-model="forumdesc">
				</div>
				<button type="submit" class="btn btn-primary">Submit</button>
			</form>

			<table class="table table-bordered table-hover" ng-init="getDataFrom()">
				<thead>
					<tr>
						<th>Forum Name</th>
						<th>Forum Description</th>
						<th>Delete</th>
						<th>Edit</th>
					</tr>
				</thead>
				<tbody>
					<tr ng-repeat="forum in forums">
						<td><a href="" data-ng-click="getforum(forum.forumid)">{{ forum.forumname }}</a></td>
						<td>{{ forum.forumdesc }}</td>
					  <td><button ng-click="getdata(forum.forumid)">Delete</button></td>
					  <td><button ng-click="editforum(forum.forumid)">Edit</button></td>
					  </tr>
					  
			</table>	
			
		</div>
	</div>
</body>

</html>