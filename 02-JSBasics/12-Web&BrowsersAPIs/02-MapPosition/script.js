const map = L.map('map').setView([0, 0], 3);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


const marker = L.marker([0, 0]).addTo(map);

navigator.geolocation.getCurrentPosition(function (position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    map.setView([lat, lon], 13);
    marker.setLatLng([lat, lon]).bindPopup("You are here!").openPopup();
}, function () {
    alert("Geolocation is not supported or permission denied.");
});

map.on('click', function (e) {
    const lat = e.latlng.lat;
    const lon = e.latlng.lng;

    marker.setLatLng([lat, lon]).bindPopup(`Marker at [${lat.toFixed(4)}, ${lon.toFixed(4)}]`).openPopup();
});
