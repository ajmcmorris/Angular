// JavaScript Document

	var app = angular.module('app',['ngRoute']);
		
		
		
		//////////////////////////////////////////
		app.config(['$routeProvider', function($routeProvider){
				$routeProvider.when('/',{
						templateUrl:'/js/views/index-temp.html'
					}).when('/findBeer',{
						templateUrl:'/js/views/find-home.html',
					}).when('/light-results',{
						templateUrl:'/js/views/light-results.html',
					}).when('/fruit-results',{
						templateUrl:'/js/views/fruit-results.html',
					}).when('/dark-results',{
						templateUrl:'/js/views/dark-results.html',
					});
			}]);
			////////////////////////////////////////////////
			app.controller('lightBeerCtrl',['$http',function($http){
			var self = this;
			self.productlist;			
			
				$http.get("http://lcboapi.com/products?where=is_ocb&where_not=is_dead&q=pilsner&q=ale&q=lager", {
					headers: {'Authorization': 'Token my Token'}
				}).then(function(response){
					self.productlist = response.data.result;
					console.log(self.productlist);
					},function(errResponse){
						console.log('error loading product data');
						});					
			}]);
			////////////////////////////////////////////////
			app.controller('fruitBeerCtrl',['$http',function($http){
			var self = this;
			self.productlist;			
			
				$http.get("http://lcboapi.com/products?where_not=is_dead&q=ipa&q=wheat&q=belgian+ale", {
					headers: {'Authorization': 'Token my Token'}
				}).then(function(response){
					self.productlist = response.data.result;
					console.log(self.productlist);
					},function(errResponse){
						console.log('error loading product data');
						});					
			}]);
			////////////////////////////////////////////////
			app.controller('darkBeerCtrl',['$http',function($http){
			var self = this;
			self.productlist;			
			
				$http.get("http://lcboapi.com/products?where_not=is_dead&q=stout", {
					headers: {'Authorization': 'Token my Token'}
				}).then(function(response){
					self.productlist = response.data.result;
					console.log(self.productlist);
					},function(errResponse){
						console.log('error loading product data');
						});					
			}]);
			
			