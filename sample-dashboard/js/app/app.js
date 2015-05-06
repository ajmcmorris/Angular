// JavaScript Document

var app = angular.module('recentPlayersApp',[]);

	app.controller('recentPlayersCtrl',[function(){
			var self = this;
			self.recent_players =[
			{src:'img/daryl-ginn.png' ,name:'Daryl Ginn' ,country:'United Kingdom'},
			{src:'img/john-mac.png' ,name:'John Mac' ,country:'United States'},
			{src:'img/aaron-sananes.png' ,name:'Aaron Sananes' ,country:'United Kingdom'},
			{src:'img/erik-henebratt.png' ,name:'Erik Henebratt' ,country:'United Kingdom'},
			{src:'img/lindsay-scott.png' ,name:'Lindsay Scott' ,country:'South Africa'},
			{src:'img/jimmy-mars.png' ,name:'Jimmy Mars' ,country:'Australia'},
			{src:'img/daryl-ginn2.png' ,name:'Daryl Ginn' ,country:'United Kingdom'},
			{src:'img/john-mac2.png' ,name:'John Mac' ,country:'United Kingdom'},
			{src:'img/aaron-sananes2.png' ,name:'Aaron Sananes' ,country:'United Kingdom'},
			];
		}]);