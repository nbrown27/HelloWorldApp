'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:UserRegistrationCtrl
 * @description
 * # UserRegistrationCtrl
 * Controller of the User Registration Controller
 */
angular.module('sbAdminApp')
  .controller('UserRegistrationCtrl', ['$scope', '$state', 'userFactory', 
      function ($scope, $state, userFactory) {
	  $scope.submit = function() {
		  var user = {
				  "address1": $scope.address1,
				  "address2": $scope.address2,
				  "city": $scope.city,
				  "country": $scope.country,
				  "firstName": $scope.firstName,
				  "lastName": $scope.lastName,
				  "state": $scope.state,
				  "zip": $scope.zip
				};
		  userFactory.saveUser(user)
		  	.then(function (response) {
		  		console.log(response);
		  		if (response.status == 200) {
		  			$state.go("dashboard.userregistrationconfirmation");
		  		}
		  	});
	  }
}]);