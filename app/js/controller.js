'use strict';

let View = require('./view');

module.exports = {
  createMap(location) {
    let latitude = location.coords.latitude,
        longitude = location.coords.longitude;

    View.renderMap(latitude, longitude);
  }
};