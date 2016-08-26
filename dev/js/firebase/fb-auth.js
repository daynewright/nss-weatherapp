'use strict';

let firebase = require("./fb-config"),
    provider = new firebase.auth.GoogleAuthProvider();

function logInGoogle() {
  return firebase.auth().signInWithPopup(provider);
}

function logOut(){
  return firebase.auth().signOut();
}

module.exports = {logInGoogle, logOut};
