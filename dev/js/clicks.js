'use strict';

let fb = require('./firebase/fb-auth');
let dom = require('./dom');
//apis
let getWeather = require('./api/weatherapi');
let getLatLon = require('./api/mapsapi');
let user, coords = {}, weather = {};

// contains all functions for clicks

//signing in
$('#signin').click(signButton);


function signButton(){
  fb.logInGoogle()
   .then(function(results){
     user = results.user;

     dom.addUserProfile(user);
     dom.addZipcodeSelect();
   }).then(function(){
     $('li').click(clickForecast);
     $('#logout').click(logoutUser);
   });
}

function logoutUser(){
  fb.logOut()
    .then(function() {
      console.log('signed out');
      dom.loginPage();
      $('#signin').click(signButton);
    }, function(error) {
      console.log('Oops..unable to sign out: ', error);
    });
}

function clickForecast(evt){
  let input = $('input').val();
  let length = evt.target.id;

  if(parseInt(input) && input.length === 5){
    getLatLon(input)
      .then(function(jsonData){
        coords.lat = jsonData.results[0].geometry.location.lat;
        coords.lon = jsonData.results[0].geometry.location.lng;
        weather = getWeather[`${length}Day`](coords);
        console.log(weather);
      });
  } else {
    evt.preventDefault();
    window.alert ('Input must be a zipcode');
  }
}
