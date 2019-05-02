/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const DrawWeather = (props) => {
  const { weatherData } = props;
  const weather = weatherData.weather[0];
  const iconUrl = `http://openweathermap.org/img/w/${weather.icon}.png`;
  return (
    <div className="draw-weather">
      <div>
        <h2>
          {weather.main} in {weatherData.name}
          <img src={iconUrl} alt={weatherData.description} />
        </h2>
        <p>
          Current Temperature: {weatherData.main.temp}°
        </p>
        <p>
          High: {weatherData.main.temp_max}°
        </p>
        <p>
          Low: {weatherData.main.temp_min}°
        </p>
        <p>
          Humidity: {weatherData.main.humidity}%
        </p>
        <p>
          Atmospheric pressure: {weatherData.main.pressure} hPa
        </p>
        <p>
          Wind Speed: {weatherData.wind.speed} mi/hr
        </p>
      </div>
    </div>
  );
};

DrawWeather.propTypes = {
  weatherData: PropTypes.shape({
    name: PropTypes.string,
    main: PropTypes.object,
    weather: PropTypes.array,
    wind: PropTypes.object,
  }),
};

DrawWeather.defaultProps = {
  weatherData: {},
};

export default DrawWeather;
