'use strict';

let loginUser = require('./firebase/fb-auth'),
          dom = require('./dom');

let userId;

// contains all functions for clicks


//signing in
$('#signin').click(function(){
  loginUser()
   .then(function(results){
     user = results.user;

     dom.addZipcodeSelect();
     dom.addUserProfile(user);
     
   });
});

//select for
$('li').click(clickForecast);



function clickForecast(evt){
  let input = $('#zipcode').val();
  let length = evt.target.innerHTML[0];

  if(parseInt(input) && input.length === 5){

  } else {
    evt.preventDefault();
    window.alert ('Input must be a zipcode');
  }
}
