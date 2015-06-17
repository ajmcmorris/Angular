// JavaScript Document

	var app = angular.module('app',['ngRoute']);
			
		//////////////////////////////////////////
		app.config(['$routeProvider', function($routeProvider){
				$routeProvider.when('/',{
						templateUrl:'/js/views/home.html'
					}).when('/findBeer',{
						templateUrl:'/js/views/find-home.html',
					}).when('/sign-up',{
						templateUrl:'/js/views/sign-up.html',
					}).when('/light-results',{
						templateUrl:'/js/views/light-results.html',
					}).when('/fruit-results',{
						templateUrl:'/js/views/fruit-results.html',
					}).when('/dark-results',{
						templateUrl:'/js/views/dark-results.html',
					});
			}]);
			//////////////////////////////////////////
			app.factory('$geolocation', ['$rootScope', '$window', '$q', function($rootScope, $window, $q) {

        function supported() {
            return 'geolocation' in $window.navigator;
        }

        var retVal = {
            getCurrentPosition: function(options) {
                var deferred = $q.defer();
                if(supported()) {
                    $window.navigator.geolocation.getCurrentPosition(
                        function(position) {
                            $rootScope.$apply(function() {
                                retVal.position.coords = position.coords;
                                retVal.position.timestamp = position.timestamp;
                                deferred.resolve(position);
                            });
                        },
                        function(error) {
                            $rootScope.$apply(function() {
                                deferred.reject({error: error});
                            });
                        }, options);
                } else {
                    deferred.reject({error: {
                        code: 2,
                        message: 'This web browser does not support HTML5 Geolocation'
                    }});
                }
                return deferred.promise;
            },

            watchPosition: function(options) {
                if(supported()) {
                    if(!this.watchId) {
                        this.watchId = $window.navigator.geolocation.watchPosition(
                            function(position) {
                                $rootScope.$apply(function() {
                                    retVal.position.coords = position.coords;
                                    retVal.position.timestamp = position.timestamp;
                                    delete retVal.position.error;
                                    $rootScope.$broadcast('$geolocation.position.changed', position);
                                });
                            },
                            function(error) {
                                $rootScope.$apply(function() {
                                    retVal.position.error = error;
                                    delete retVal.position.coords;
                                    delete retVal.position.timestamp;
                                    $rootScope.$broadcast('$geolocation.position.error', error);
                                });
                            }, options);
                    }
                } else {
                    retVal.position = {
                        error: {
                            code: 2,
                            message: 'This web browser does not support HTML5 Geolocation'
                        }
                    };
                }
            },

            clearWatch: function() {
                if(this.watchId) {
                    $window.navigator.geolocation.clearWatch(this.watchId);
                    delete this.watchId;
                }
            },

            position: {}
        };

        return retVal;
    }]);
			////////////////////////////////////////////////
			app.controller('lightBeerCtrl',['$http','$geolocation',function($http,$geolocation){
			var self = this;
			self.productlist;
			
				self.$geolocation = $geolocation

				// basic usage
				$geolocation.getCurrentPosition().then(function(location) {
				  self.lat = location.coords.latitude;
				  self.lon = Math.round(location.coords.longitude*10000000)/10000000;
				  blah(self.lat,self.lon);
				});

				
					function blah(lat,lon){
						var long = lon,lati = lat;
						
				$http.get("http://lcboapi.com/products?where_not=is_dead&q=lager", {
					headers: {'Authorization': 'Token MDowNTlmYWQ1Yy1kMGUwLTExZTQtOWIwYi1mZmJhNWMzYTk4YmU6S01UVGRveDg0V2FFYXZkS1VpVERnTmZJUVY0ZWV3UGR2QUly'}
				}).then(function(response){
					self.productlist = response.data.result;
					console.log(self.productlist);
					},function(errResponse){
						console.log('error loading product data');
						});	
					}			
			}]);
			////////////////////////////////////////////////
			app.controller('fruitBeerCtrl',['$http',function($http){
			var self = this;
			self.productlist;			
			
				$http.get("http://lcboapi.com/products?where_not=is_dead&q=ipa&q=wheat&q=belgian+ale", {
					headers: {'Authorization': 'Token MDowNTlmYWQ1Yy1kMGUwLTExZTQtOWIwYi1mZmJhNWMzYTk4YmU6S01UVGRveDg0V2FFYXZkS1VpVERnTmZJUVY0ZWV3UGR2QUly'}
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
					headers: {'Authorization': 'Token MDowNTlmYWQ1Yy1kMGUwLTExZTQtOWIwYi1mZmJhNWMzYTk4YmU6S01UVGRveDg0V2FFYXZkS1VpVERnTmZJUVY0ZWV3UGR2QUly'}
				}).then(function(response){
					self.productlist = response.data.result;
					console.log(self.productlist);
					},function(errResponse){
						console.log('error loading product data');
						});					
			}]);
			
			