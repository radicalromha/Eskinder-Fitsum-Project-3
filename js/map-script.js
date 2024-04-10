function init() {
  //alert("it works");
  var el = document.getElementById("canvas");
  var myLocation = new google.maps.LatLng(-9.0192, 38.7525);
  var mapOptions = {
    center: myLocation,
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    mapTypeControlOptions: {
      postion: google.maps.ControlPostion.BOTTOM_CENTER,
    },
  };

  var myMap = new google.maps.Map(el, mapOptions);

  var marker = new google.maps.Marker({
    position: myLocation,
    map: myMap,
    animation: google.maps.Animation.BOUNCE,
    icon: "iit-icon.png",
  });

  var contentString =
    "<h1>IIT Perlstein Hall</h1><p>Lorem ipsum dolor sit amet,";

  var infowindow = new google.maps.InfoWindow({
    content: contentString,
  });

  google.maps.event.addListener(marker, "mouseover", function () {
    infowindow.open(myMap, marker);
  });
}

google.maps.event.addDomListener(window, "load", init);
