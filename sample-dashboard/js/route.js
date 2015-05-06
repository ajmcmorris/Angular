// JavaScript Document

	var app = angular.module('routingApp',['ngRoute']);
		
		app.config(['$routeProvider', function($routeProvider){
				$routeProvider.when('/beginner',{
						templateUrl:'views/beginner-home.html'
					});
			}]);