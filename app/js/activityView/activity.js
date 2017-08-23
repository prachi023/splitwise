define(function() {
	'use strict';

	angular.module('coreModule.activityView', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/activityView', {
	    templateUrl: 'activityView/activity.html',
	    controller: 'activityCtrl'
	  });
	}])
	.controller('activityCtrl', [function() {
		
	}]);
	
});