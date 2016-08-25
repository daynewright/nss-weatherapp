(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function getLatLon(zipcode){
      return new Promise(function(resolve, reject){
        $.ajax({
          url: `http://maps.googleapis.com/maps/api/geocode/json?address=${zipcode}`,
          type: 'GET'
        }).done(function(zipcodeData){
          resolve(zipcodeData);
        });
      });
}

module.exports = getLatLon;

},{}],2:[function(require,module,exports){
'use strict';

let apiKey = require('./weatherkey');

function getWeatherToday(jsonData){
    let lat = jsonData.results[0].geometry.location.lat;
    let lon = jsonData.results[0].geometry.location.lng;

    return new Promise(function(resolve, reject){
      $.ajax({
        url: `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${apiKey()}`,
        type: 'GET'
      }).done(function(weatherData){
        resolve(weatherData);
      });
    });
}

module.exports = {getWeatherToday};

},{"./weatherkey":3}],3:[function(require,module,exports){
'use strict';

module.exports = function(){
  return 'ceca3c0bf5b9812b6ceb2e6a00e146ab';
};

},{}],4:[function(require,module,exports){
'use strict';

let getWeather = require('./api/weatherapi'),
    getLatLon = require('./api/mapsapi'),
    weather = {};


function testWeather(){
  getLatLon('37174')
    .then(function(location){
      weather = getWeather(location);
    });
    console.log(weather);
}

testWeather();

},{"./api/mapsapi":1,"./api/weatherapi":2}]},{},[4]);
