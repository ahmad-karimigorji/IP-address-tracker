function setMap(
  data = { location: { lat: 35.7000815, lng: 51.3407519, city: "Tehren" } }
) {
  let lat = data.location.lat;
  let lng = data.location.lng;
  let city = data.location.city;

  var map = L.map("map").setView([lat, lng], 13);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  var marker = L.marker([lat, lng]).addTo(map);
  marker.bindPopup(`${city}`).openPopup();
}

export default setMap;
