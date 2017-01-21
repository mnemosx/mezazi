var map;

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 57.052611,
      lng: 24.117851
    },
    zoom: 10,
    disableDefaultUI: true,
    styles: [{
      featureType: 'all',
      stylers: [{
        saturation: -80
      }]
    }, {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{
        hue: '#0e045c'
      }, {
        saturation: 20
      }]
    }, {
      featureType: 'road',
      elementType: 'labels',
      stylers: [{
        visibility: 'on'
      }]
    }, {
      featureType: 'administrative.province',
      elementType: 'all',
      stylers: [{
        visibility: 'off'
      }]
    }, {
      featureType: 'poi.business',
      elementType: 'labels',
      stylers: [{
        visibility: 'off'
      }]
    }, {
      featureType: 'transit.line',
      elementType: 'geometry',
      stylers: [{
        visibility: 'off'
      }]
    }]
  });


  marker = new google.maps.Marker({
    position: {
      lat: 57.123109,
      lng: 24.318968
    },
    map: map,
    animation: google.maps.Animation.BOUNCE,
  });
  var contentString = '<div id="map_pointer">' +
      '<a href="https://goo.gl/maps/r92PFiwnN1S2" target="_blank">Plānot maršrutu Google kartē</a>' +
      '</div>';
  marker.addListener('mouseout', function() {
    t = setTimeout(function() {
      infowindow.close()
    }, 2000);
  });

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  google.maps.event.addListener(marker, 'mouseover', function() {
    infowindow.open(map, marker);
  });
  google.maps.event.addDomListener(window, "resize", function() {
    var center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(center);
  });
  var isDraggable = $(document).width() > 540 ? true : false;

  var mapOptions = {
    draggable: isDraggable,

    scrollwheel: false,
  };
}