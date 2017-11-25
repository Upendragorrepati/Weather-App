'use strict';

appModule.controller('forecastWeatherController', function($scope, $location,$http) {

    var url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20syd%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
    
        $http.get(url)
        .then(function(response){
            $scope.forecastWeather=response.data.query.results.channel.item.forecast;
    
            $scope.quantity=6;
    
            
        
    
        }, function(response){
            // if api is failure
        });
    

});