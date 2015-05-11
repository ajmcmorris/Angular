// JavaScript Document

	var productApp = angular.module('app',['ngRoute']);
	
		productApp.controller('productCtrl',['$http',function($http){
			var self = this;
			self.productlist = [{}];
				$http.get('http://lcboapi.com/products? per_page=3 & q=light+malty', {
					headers: {Authorization: 'Token MDowNTlmYWQ1Yy1kMGUwLTExZTQtOWIwYi1mZmJhNWMzYTk4YmU6S01UVGRveDg0V2FFYXZkS1VpVERnTmZJUVY0ZWV3UGR2QUly'}
				}).then(function(response){
					self.productlist = response.data;
					console.log(response.data);
					},function(errResponse){
						console.log('error loading product data');
						});
			}]);