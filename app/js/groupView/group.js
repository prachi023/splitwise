define(function() {
	'use strict';

	angular.module('coreModule.groupView', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/groupView', {
	    templateUrl: 'groupView/group.html',
	    controller: 'groupCtrl'
	  });
	}])
	.controller('groupCtrl', [function() {
		
	}]);
	
});