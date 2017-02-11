'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:RegisteredUserReportCtrl
 * @description
 * # RegisteredUserReportCtrl
 * Controller of the Registered User Report
 */
angular.module('sbAdminApp')
  .controller('RegisteredUserReportCtrl', ['$scope', '$state', 'userFactory', 
      function ($scope, $state, userFactory) {
	  userFactory.getUsers()
		  	.then(function (response) {
		  		$scope.users = response.data.content;
		  	});
}]);