'use strict';

let loginUser = require('./firebase/fb-auth');
let dom = require('./dom');
let user;

// contains all functions for clicks

//signing in
$('#signin').click(function(){
  loginUser()
   .then(function(results){
     user = results.user;
     
     dom.addUserProfile(user);
     dom.addZipcodeSelect();
   }).then(function(){
     $('li').click(clickForecast);
   });
 });


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
