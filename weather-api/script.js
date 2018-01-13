$(document).ready(function(){

  // Navigator.geolocation is Async, see SO#
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
      let curLat = "lat=" + position.coords.latitude;
      let curLon = "lon=" + position.coords.longitude;
      let weatherAPI = getURL(curLon, curLat);

      //Access JSON data
      $.getJSON(weatherAPI, function(data){
        let curCity = data.name;
        let curCountry = data.sys.country;
        let curTemp = Math.round(data.main.temp*10)/10; //13.3
        let curDescription = data.weather[0].description //weather is array of Obj, see SO#
        $('.city').html(curCity);
        $('.country').html(curCountry);
        $('.temperature').html(curTemp);
        $('.description').html(curDescription);
      });
    });
  }
});

//Make URL for API request
function getURL(lon, lat){
  var url =  "https://fcc-weather-api.glitch.me/api/current?";
  url = url + lon + "&" + lat;
  return url;
}
