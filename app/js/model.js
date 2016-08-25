'use strict';

let Router = require('./router'),
    Controller = require('./controller');

module.exports = {
  getLocation() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(geo => {
        geo ? resolve(geo) : reject(new Error("You didn't get location"));
      });
    });
  },
  getMap(location) {
    ymaps.ready(init);

    function init() {
      Controller.createMap(location);
    }
  }
};