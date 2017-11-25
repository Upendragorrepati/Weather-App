'use strict';


var appModule = angular.module('weather-app', [
        'ngRoute'
    ]);


appModule.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
    .when("/currentWeather", {
        templateUrl : "modules/currentWeather/current_Weather.html",
        controller: "currentWeatherController"
    })
    .when("/forecastWeather", {
        templateUrl : "modules/forecastWeather/forecast_Weather.html",
        controller:"forecastWeatherController"
    });
});