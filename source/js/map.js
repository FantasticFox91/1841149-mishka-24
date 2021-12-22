document.querySelector(".contacts__img").remove();

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 59.93872031587833, lng: 30.32304628352043},
    mapID: "symmetric-ray-334813",
    zoom: 16.6,
  });

  const image = "../img/map-pin.svg";
  const myMarker = new google.maps.Marker({
    position: { lat: 59.93872031587833, lng: 30.32304628352043},
    map,
    icon: image,
  });
}
