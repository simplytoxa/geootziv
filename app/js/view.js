'use strict';

module.exports = {
  renderMap(latitude, longitude) {
    let myMap;

    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
      center: [latitude, longitude],
      zoom: 10
    }, {
      searchControlProvider: 'yandex#search'
    });
  }
};