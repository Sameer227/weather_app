import React from "react";
import "./current-weather.css";
const moment = require('moment');

interface props { data: any } 

let td1 : any = {  padding:'10px', fontWeight:"bold"}
let td2 : any = { textAlign:'right', padding:'10px'}
let tr:any = {width:"100%", padding:'20px'}

const CurrentWeather = ({ data }: props) => {

  let date = new Date()
  let date1 = moment(date).format('hh:MM:SS A')
  

  console.log(data);
  return (
    <div  >
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}. Weather </p>
          <p className="weather-description">As of {date1}</p>
          {/* <p className="weather-description">{data.weather[0].description}</p> */}
        </div>
       
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${data.weather[0].icon}.png`}
        />
        
        
        
      </div>
      <div>

          <p className="weather-description">{data.weather[0].description}</p>
        </div>
    </div>
    <div className="bottom1">
    <div style={{width:"50%"}}>
    <table style={{width:"90%"}} >
      <tr style={tr}>
        <td style={td1}>
    High/Low
        </td>
        <td style={td2}>
          {Math.round(data.main.temp_max)}/{Math.round(data.main.temp_min)}
        </td>
      </tr>
      <tr style={tr}>
        <td style={td1}>
    Humidity
        </td>
        <td style={td2}>
          {data.main.humidity} %
        </td>
      </tr>
      <tr style={tr}>
        <td style={td1}>
    Pressure
        </td>
        <td style={td2}>
        {data.main.pressure} hPa
        </td>
      </tr>
      <tr style={tr}>
        <td style={td1}>
    Visibility
        </td>
        <td style={td2}>
        {data.visibility/1000} Km
        </td>
      </tr>
    </table>
  
    </div>
    <div style={{width:"50%"}}>
    <table width="100%">
      <tr style={tr}>
        <td style={td1}>
    Wind
        </td>
        <td style={td2}>
        {data.wind.speed} km/hr
        </td>
      </tr>
      <tr style={tr}>
        <td style={td1}>
    Wind Direction
        </td>
        <td style={td2}>
        {data.wind.deg}° deg
        </td>
      </tr>
      <tr style={tr}>
        <td style={td1}>
    Sunrise
        </td>
        <td style={td2}>
        {data.sys.sunrise}
        </td>
      </tr>
      <tr style={tr}>
        <td style={td1}>
    Sunset
        </td>
        <td style={td2}>
        {data.sys.sunset}
        </td>
      </tr>
    </table>
    </div>

    </div>
    </div>
  );
};



export default CurrentWeather;

