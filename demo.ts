<link href='https://api.mapbox.com/mapbox-gl-js/v0.47.0/mapbox-gl.css' rel='stylesheet' />

var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
mapboxgl.accessToken = 'pk.eyJ1IjoibmV3aXAiLCJhIjoiY2pqdjd6ZzEyMGQ2MjNycXc1OXdoY3o4MyJ9.VKbTGUU349ROicywczdVqg';
var map = new mapboxgl.Map({
container: 'YOUR_CONTAINER_ELEMENT_ID',
style: 'mapbox://styles/mapbox/streets-v10'
});