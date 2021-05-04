// Create map object //
var myMap = L.map("map", {
  center: [15.5994, -28.6731],
  zoom: 3


});


// Add tile layer/background map//
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
tileSize: 512,
maxZoom: 18,
zoomOffset: -1,
id: "mapbox/streets-v11",
accessToken: API_KEY
}).addTo(myMap);


//API query URL//
var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";


//Call in GeoJson data from website//
d3.json(url, function (data) {
  var eqData = data.features;

for (var i = 0; i < eqData.length; i++) {
   var longitude = eqData[i].geometry.coordinates[0];
   var latitude = eqData[i].geometry.coordinates[1];
   var date= new Date(data.features[i].properties.time);
   var magnitude = eqData[i].properties.mag;
   var depth = eqData[i].geometry.coordinates[2];

//Create Dictionary of colors to classify earthquake depth//
colors = {
  blue: "#3399ff",
  yellow: "#FFC300",
  orange: "#FF5733",
  red: "#C70039",
  darkred: "#900C3F",
  purple: "#581845 "
}

//Classify earthquakes by depth  size and assign color//
if (depth> 90) { fillColor = colors.purple;
} 
  else if (depth > 70) {
fillColor = colors.darkred;
} 
  else if (depth > 50) {
fillColor = colors.red;
}
  else if (depth > 30) {
fillColor = colors.orange;
} 
  else if (depth > 10) {
fillColor = colors.yellow;
} 
  else {
fillColor = colors.blue;};

}


 