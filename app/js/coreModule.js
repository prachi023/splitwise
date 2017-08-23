define(function(){
	'use strict';

	var coreModule = angular.module('coreModule', [
		'ngRoute',
		'coreModule.dashboardView',
		'coreModule.groupView',
		'coreModule.activityView'
	])
	.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
		$locationProvider.hashPrefix('!');

		$routeParams.otherwise({redirectTo: '/dashboardView'});
	}]);

	coreModule.controller('mainController', function($scope){
		$scope.title = "Hello World";
	});

});