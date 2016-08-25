'use strict';

const Model = require('./model');

new Promise(res => document.readyState === 'complete' ? res() : window.onload = res())
  .then(() => {
    return Model.getLocation();
  }).then(location => {
  return Model.getMap(location);
});
