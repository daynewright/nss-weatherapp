'use strict';

let apiKey = require('./weatherkey')();
let url = 'http://api.openweathermap.org/data/2.5/';

function today(coords){
    return new Promise(function(resolve, reject){
      $.ajax({
        url: `${url}weather?lat=${lat}&lon=${lon}&APPID=${apiKey}`,
        type: 'GET'
      }).done(function(weatherData){
        resolve(weatherData);
      });
    });
}

function threeDay(coords){
  return new Promise(function(resolve, reject){
    $.ajax({
      url: `${url}forcast/daily?lat=${lat}&lon=${lon}&APPID=${apiKey}&cnt=3`,
      type: 'GET'
    }).done(function(weatherData){
      resolve(weatherData);
    });
  });
}

function sevenDay(coords){
  return new Promise(function(resolve, reject){
    $.ajax({
      url: `${url}forcast/daily?lat=${lat}&lon=${lon}&APPID=${apiKey}&cnt=7`,
      type: 'GET'
    }).done(function(weatherData){
      resolve(weatherData);
    });
  });
}

module.exports = {today, threeDay, sevenDay};
