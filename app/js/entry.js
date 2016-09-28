'use strict';

new Promise(res => document.readyState === 'complete' ? res() : window.onload = res())
  .then(() => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(geo => {
        geo ? resolve(geo) : reject(new Error("You didn't get location"));
      });
    });
  }).then(location => {
  ymaps.ready(() => {
    let latitude = location.coords.latitude,
        longitude = location.coords.longitude,
        geoObjects = [],
        // Создание экземпляра карты и его привязка к контейнеру с
        // заданным id ("map").
        myMap = new ymaps.Map('map', {
          center: [latitude, longitude],
          zoom: 10
        }, {
          searchControlProvider: 'yandex#search'
        }),
        clusterer = new ymaps.Clusterer({
          preset: 'islands#invertedDarkOrangeClusterIcons',
          groupByCoordinates: false,
          clusterDisableClickZoom: true,
          clusterHideIconOnBalloonOpen: false,
          geoObjectHideIconOnBalloonOpen: false
        });

    // Handling click events and getting coords
    myMap.events.add('click', e => {
      let coords = e.get('coords'),
          points = [];

      points.push(coords);

      // Adding pointers
      clusterer.add(new ymaps.Placemark([coords[0].toPrecision(6), coords[1].toPrecision(6)], {
        balloonContent: 'цвет <strong>воды пляжа бонди</strong>'
      }, {
        preset: 'islands#darkOrangeIcon'
        // preset: 'islands#icon'
        // iconColor: '#0095b6'
      }));

      myMap.geoObjects.add(clusterer);
    });

  });
});
