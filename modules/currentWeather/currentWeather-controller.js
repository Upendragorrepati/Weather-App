'use strict';

appModule.controller('currentWeatherController', function($scope, $location,$http) {

	var url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20syd%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
	
		$http.get(url)
		.then(function(response){
			// if api is success
			console.log('api successfully invoked');	
			//console.log(response);
			
			$scope.currentWeather = {
	
			city:response.data.query.results.channel.location.city,
			currentDate:response.data.query.results.channel.item.condition.date,
			tempToday:response.data.query.results.channel.item.condition.temp,
			weatherDescription:response.data.query.results.channel.item.condition.text,
			sunrise:response.data.query.results.channel.astronomy.sunrise,
			sunset:response.data.query.results.channel.astronomy.sunset,
			windspeed:response.data.query.results.channel.wind.speed,
			humidity:response.data.query.results.channel.atmosphere.humidity

		}
		$scope.celsius = (($scope.currentWeather.tempToday - 32) * 5.0/9.0).toFixed();
	
			
			
					
	},function(response){
		// if api is failure
	});	
	
});