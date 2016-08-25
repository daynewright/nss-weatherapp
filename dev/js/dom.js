"use strict";

let zipcodeTemplate = require('../templates/zipcodeselect.hbs'),
    profileTemplate = require('../templates/profilenav.hbs');

function addZipcodeSelect(){
    $('#search').html(zipcodeTemplate());
    $('#signin').remove();
}

function addUserProfile(user){
    $('').append();
}


module.exports = {addZipcodeSelect, addUserProfile};
