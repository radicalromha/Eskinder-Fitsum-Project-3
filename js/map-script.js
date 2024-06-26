function init() {
  var el = document.getElementById("canvas");
  var myLocation = new google.maps.LatLng(-9.0192, 38.7525);
  var mapOptions = {
    center: myLocation,
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_CENTER,
    },
  };

  var myMap = new google.maps.Map(el, mapOptions);

  var marker = new google.maps.Marker({
    position: myLocation,
    map: myMap,
    animation: google.maps.Animation.BOUNCE,
  });

  var contentString =
    "<h1>Addis Ababa, Ethiopia</h1><p>Ethiopia is the oldest independent country in Africa. It is also the second most populated country in Africa with a population of over 106 million people, making it second to Nigeria. Ethiopia also stands as the only African country that has never been colonized.</p>";

  var infowindow = new google.maps.InfoWindow({
    content: contentString,
  });

  google.maps.event.addListener(marker, "mouseover", function () {
    infowindow.open(myMap, marker);
  });
}

google.maps.event.addDomListener(window, "load", init);
