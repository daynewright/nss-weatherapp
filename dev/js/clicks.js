'use strict';

let fb = require('./firebase/fb-auth');
let dom = require('./dom');
let user;

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

function clickForecast(evt){
  let input = $('input').val();
  let length = evt.target.innerHTML[0];

  if(parseInt(input) && input.length === 5){
    console.log('got a value of ', input);
  } else {
    evt.preventDefault();
    window.alert ('Input must be a zipcode');
  }
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
