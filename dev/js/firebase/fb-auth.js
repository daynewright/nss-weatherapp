'use strict';

let firebase = require("./fb-config"),
    provider = new firebase.auth.GoogleAuthProvider();

function logInGoogle() {
  return firebase.auth().signInWithPopup(provider);
}

module.exports = logInGoogle;
