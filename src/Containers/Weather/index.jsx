import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CityInput from '@/components/CityInput';
import WeatherItem from '@/components/CityWeather';
import CurrentLocation from '@/components/CurrentLocation';
import {
  getCoordinates,
  getUserLocation,
  getWeatherByCityName,
  handleCityInputClick,
} from '@/actions/weather';

import './styles.css';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  componentDidMount() {
    const { getCoordinates, coordinates } = this.props;
    if (Object.keys(coordinates).length === 0) getCoordinates();
  }

  componentDidUpdate() {
    const {
      coordinates,
      weatherData,
      userLocation,
      getUserLocation,
      getWeatherByCityName,
    } = this.props;
    if (Object.keys(coordinates).length !== 0 && Object.keys(userLocation).length === 0) {
      getUserLocation(coordinates);
    }
    if (Object.keys(weatherData).length === 0 && userLocation.city) {
      getWeatherByCityName(userLocation.city);
    }
  }

  handleCityInputChange(value) {
    this.setState({ inputValue: value });
  }

  render() {
    const {
      coordinates,
      weatherData,
      userLocation,
      handleCityInputClick,
    } = this.props;
    const { inputValue } = this.state;

    return (
      <div className="weather">
        <h1>Weather</h1>
        <CurrentLocation
          coordinates={coordinates}
          address={userLocation}
        />
        <CityInput
          onChange={event => this.handleCityInputChange(event.target.value)}
          onClick={() => handleCityInputClick(inputValue)}
        />
        {Object.keys(weatherData).length === 0
          ? <div>No data. Please enter city</div>
          : (
            <WeatherItem
              weatherData={weatherData}
            />
          )}
      </div>
    );
  }
}

Weather.propTypes = {
  weatherData: PropTypes.shape({
    name: PropTypes.string,
    main: PropTypes.object,
    weather: PropTypes.array,
    wind: PropTypes.object,
  }),
  userLocation: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
    street: PropTypes.string,
  }),
  coordinates: PropTypes.shape({
    lat: PropTypes.string,
    lon: PropTypes.string,
  }),
  handleCityInputClick: PropTypes.func,
  getUserLocation: PropTypes.func,
  getCoordinates: PropTypes.func,
  getWeatherByCityName: PropTypes.func,
};

Weather.defaultProps = {
  weatherData: {},
  userLocation: {},
  coordinates: {},
  handleCityInputClick: undefined,
  getUserLocation: undefined,
  getCoordinates: undefined,
  getWeatherByCityName: undefined,
};

function mapStateToProps(state) {
  return {
    coordinates: state.coordinates,
    userLocation: state.userLocation,
    weatherData: state.weatherData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCoordinates: () => dispatch(getCoordinates()),
    getUserLocation: coordinates => dispatch(getUserLocation(coordinates)),
    getWeatherByCityName: userLocation => dispatch(getWeatherByCityName(userLocation)),
    handleCityInputClick: inputValue => dispatch(handleCityInputClick(inputValue)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
