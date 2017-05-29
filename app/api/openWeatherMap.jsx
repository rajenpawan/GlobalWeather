var axios = require('axios');
var WeatherForm = require('WeatherForm');
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=b485954bf088536c0d34ba88b67de2fa&units=metric';

//b485954bf088536c0d34ba88b67de2fa

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
  return  axios.get(requestUrl).then(function (res){

      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    },
    // function(res){
    //   throw new Error('Unable to fetch ');
    // },
function(err){
  throw new Error('Unable to fetch weather ');
}
  );
  }
}
