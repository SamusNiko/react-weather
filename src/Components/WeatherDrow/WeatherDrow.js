import React from 'react'
import './WeatherDrow.css'

const WeatherDrow = props => {
  const weather = props.weatherData.weather[0];
  const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
  return (
    <div className={'WeatherDrow'}>
      <div>
        {<h2>
          {weather.main} in {props.weatherData.name}
          <img src={iconUrl} alt={props.weatherData.description} />
        </h2>}
        <p>Current Temperatur: {props.weatherData.main.temp}°</p>
        <p>High: {props.weatherData.main.temp_max}°</p>
        <p>Low: {props.weatherData.main.temp_min}°</p>
        <p>Humidity: {props.weatherData.main.humidity}%</p>
        <p>Atmospheric pressure: {props.weatherData.main.pressure} hPa</p>
        <p>Wind Speed: {props.weatherData.wind.speed} mi/hr</p>
        
      </div>
    </div>
  )
}

export default WeatherDrow