// JavaScript Document

	var app = angular.module('app',['ngRoute']);
		
		app.config(['$routeProvider', function($routeProvider){
				$routeProvider.when('/',{
						templateUrl:'/js/views/beginner/index-temp.html'
					}).when('/beginner',{
						templateUrl:'/js/views/beginner/beginner-home.html',
					}).when('/product-results',{
						templateUrl:'/js/views/beginner/product-results.html',
					});
			}]);
			
			app.controller('productCtrl',['$http',function($http){
			var self = this;
			self.productlist;
				$http.get('http://lcboapi.com/products? per_page=10 & q=light+malty', {
					headers: {'Authorization': 'Token mytoken'}
				}).then(function(response){
					self.productlist = response.data.result;
					console.log(self.productlist);
					},function(errResponse){
						console.log('error loading product data');
						});
			}]);
