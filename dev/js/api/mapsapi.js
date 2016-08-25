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
