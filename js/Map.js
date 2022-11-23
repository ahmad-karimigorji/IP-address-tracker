function setMap(data){

    const  lat = data.location.lat
    const  lng = data.location.lng
    
    
    var map = L.map('map').setView([lat, lng], 13);
    
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    
    var marker = L.marker([lat, lng]).addTo(map);
    
    var circle = L.circle([lat, lng], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.3,
        radius: 300
    }).addTo(map);
    
    
    
    marker.bindPopup(`${data.location.city}`).openPopup();
    circle.bindPopup(`${data.location.city}`);
}

export default setMap;
