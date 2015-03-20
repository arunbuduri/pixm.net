/*------------------------------------------------------------------
Project:  Mos7 - Responsive Bootstrap 3 App Landing Page Template
Version:  1.3
Last change:  29/12/2014
Design by:  TemplatesPRO.com.br

Script (line):
- DOCUMENT.READY (12)
  1) Component Contact - Google Maps (16)
-------------------------------------------------------------------*/

$(document).ready(function () {
  "use strict";
  
  /********************************************************************
   1) Component Contact - Google Maps
   **********************************/
  var map;
  // Your location here (latitude/longitude)
  var my_location = new google.maps.LatLng(40.7419614, -74.004624);
  var my_maptype_id = 'custom_style';

  function initialize() {
    var featureOpts = [
      {
        stylers: [
          { hue: '#d35400' },
          { visibility: 'on' },
          { gamma: 0.5 },
          { weight: 0.5 }
        ]
      },
      {
        featureType: 'water',
        stylers: [
          { color: '#d35400' }
        ]
      }
    ];

    var mapOptions = {
      zoom: 13,
      center: my_location,
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, my_maptype_id]
      },
      mapTypeId: my_maptype_id
    };

    var marker = new google.maps.Marker({
      position: my_location,
      url: '/',
      animation: google.maps.Animation.DROP
    });

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    marker.setMap(map);

    var styledMapOptions = {
      name: 'Custom Style'
    };

    var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

    map.mapTypes.set(my_maptype_id, customMapType);
  }

  google.maps.event.addDomListener(window, 'load', initialize);

});
