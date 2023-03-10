import { useState } from "react";
import Search from "./components/search/search";
import momenttz from 'moment-timezone'
import CurrentWeather from "./components/current-weather/current-weather";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import "./App.css";
const moment = require('moment');


function App() {
  const [currentWeather, setCurrentWeather] = useState(null);

  const handleOnSearchChange = (searchData: any): void => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
  

    Promise.all([currentWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
console.log(weatherResponse);
let sunrise = new Date(weatherResponse.sys.sunrise)
  let sunset = new Date(weatherResponse.sys.sunset)
  weatherResponse.sys.sunrise = momenttz(sunrise).tz("Asia/Kolkata").format('hh:MM:SS A')
  weatherResponse.sys.sunset = moment(sunset).format('hh:MM:SS A')
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
      })
      .catch(console.log);
  };

  return (
    <div className="container">
    <h1 style={{textAlign:'center'}}>Weather App</h1>
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
    </div>
  );
}

export default App;
