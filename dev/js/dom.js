"use strict";

let zipcodeTemplate = require('../templates/zipcodeselect.hbs'),
    profileTemplate = require('../templates/profilenav.hbs'),
    loginHeader = require('../templates/loginheader.hbs'),
    loginBody = require('../templates/loginbody.hbs');

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

function loginPage(){
  $('.navbar-header').children().not('a').remove();
  $('.navbar-header').append(loginHeader());
  $('#search').html(loginBody());
}


module.exports = {addZipcodeSelect, addUserProfile, loginPage};
