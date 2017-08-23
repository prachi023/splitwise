define(function() {
	'use strict';

	angular.module('coreModule.dashboardView', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/dashboardView', {
	    templateUrl: 'dashboardView/dashboard.html',
	    controller: 'dashboardCtrl'
	  });
	}])
	.controller('dashboardCtrl', [function() {
		
	}]);

});