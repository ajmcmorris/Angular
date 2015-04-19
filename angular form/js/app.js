// JavaScript Document

		//creating module and storing it in variable named app
		var app = angular.module('myApp',[]);
		console.log('app.js firing');
		
		//creating controller used to alter html behaviour
		app.controller('MainController', [function() { 
		  		var self = this;
				
				var email = self.email,
				password = self.password,	
				title = self.title,
				message = self.message;
				
				self.submit = function()
				{
					alert("Form Meets all criteria able to submit");
				};
		}]);
