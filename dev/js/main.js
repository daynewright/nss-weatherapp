'use strict';

let getWeather = require('./api/weatherapi'),
    getLatLon = require('./api/mapsapi'),
    coords = {}, weather = {};


function testWeather(){
  getLatLon('37174')
    .then(function(jsonData){
      coords.lat = jsonData.results[0].geometry.location.lat;
      coords.lon = jsonData.results[0].geometry.location.lng;

      weather = getWeather(coords);
    });
    console.log(weather);
}

testWeather();
