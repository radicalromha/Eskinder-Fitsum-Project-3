let map;

async function initMap() {
  // The location of Addis Ababa, Ethiopia
  const position = { lat: -9.0192, lng: 38.7525 };
  // Request needed libraries.
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Addis Ababa
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Addis Ababa
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Home",
  });
}

initMap();
