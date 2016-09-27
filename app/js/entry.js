'use strict';

new Promise(res => document.readyState === 'complete' ? res() : window.onload = res())
  .then(() => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(geo => {
        geo ? resolve(geo) : reject(new Error("You didn't get location"));
      });
    });
  }).then(location => {
  ymaps.ready(init);

  function init() {
    let latitude = location.coords.latitude,
        longitude = location.coords.longitude,
        // Создание экземпляра карты и его привязка к контейнеру с
        // заданным id ("map").
        myMap = new ymaps.Map('map', {
          center: [latitude, longitude],
          zoom: 10
        }, {
          searchControlProvider: 'yandex#search'
        }),
        objectManager = new ymaps.ObjectManager({
          // Чтобы метки начали кластеризоваться, выставляем опцию.
          clusterize: true,
          // ObjectManager принимает те же опции, что и кластеризатор.
          gridSize: 32
        });

    // Handling click events and getting coords
    myMap.events.add('click', e => {
      let coords = e.get('coords');

      // Adding pointers
      myMap.geoObjects.add(new ymaps.Placemark([coords[0].toPrecision(6), coords[1].toPrecision(6)], {
        balloonContent: 'цвет <strong>воды пляжа бонди</strong>'
      }, {
        preset: 'islands#icon',
        iconColor: '#0095b6'
      }));
    });
    
    
    
    
    
  }
});
