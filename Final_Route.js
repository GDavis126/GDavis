"use strict";

fetch("./Final_JSON.js")
  .then(function(resp){
    return resp.json();
  })
  .then(function(data){
    console.log(data);
  });
