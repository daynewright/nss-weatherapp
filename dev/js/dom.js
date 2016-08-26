"use strict";

let zipcodeTemplate = require('../templates/zipcodeselect.hbs'),
    profileTemplate = require('../templates/profilenav.hbs');

function addZipcodeSelect(){
  return new Promise(function(resolve, reject){
      zipCodeSelectFunction();
      resolve();
  });
}

function zipCodeSelectFunction(){
  $('#search').html(zipcodeTemplate());
  $('#signin').remove();
}

function addUserProfile(user){
  return new Promise(function(resolve, reject){
    $('.navbar-header').append(profileTemplate(user));
    resolve();
  });
}


module.exports = {addZipcodeSelect, addUserProfile};
