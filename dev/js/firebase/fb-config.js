"use strict";

let firebase = require("firebase/app"),
    fbData = require('./fb-key')();

require("firebase/auth");

var config = {
  apiKey: fbData.key,
  authDomain: fbData.authUrl
};

firebase.initializeApp(config);

module.exports = firebase;
