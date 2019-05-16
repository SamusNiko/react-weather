import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const CityWeather = (props) => {
  const { weatherData } = props;
  if (weatherData.error) {
    return (
      <div className="error">
        Error: {weatherData.error}
      </div>
    );
  }
  if (weatherData.weather[0]) {
    const weather = weatherData.weather[0];
    const iconUrl = require(`@/image/${weather.icon}.png`);
    return (
      <div className="city-weather clearfix">
        <h2>
          {weather.main} in {weatherData.name}
        </h2>
        <div className="main-parametrs clearfix">
          <img src={iconUrl} alt={weatherData.description} />
          <div className="current-temperatur">
            {weatherData.main.temp}°
            <p>
              High: {weatherData.main.temp_max}°
            </p>
            <p>
              Low: {weatherData.main.temp_min}°
            </p>
          </div>
          <div className="other-parametrs">
            <p>
              Humidity: {weatherData.main.humidity}%
            </p>
            <p>
              Pressure: {weatherData.main.pressure} hPa
            </p>
            <p>
              Wind Speed: {weatherData.wind.speed} mi/hr
            </p>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

CityWeather.propTypes = {
  weatherData: PropTypes.shape({
    name: PropTypes.string,
    main: PropTypes.object,
    weather: PropTypes.array,
    wind: PropTypes.object,
    error: PropTypes.string,
  }),
};

CityWeather.defaultProps = {
  weatherData: {},
};

export default CityWeather;
