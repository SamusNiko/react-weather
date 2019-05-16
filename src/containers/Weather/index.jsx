import React, { Component } from 'react';
import PropTypes from 'prop-types';
import noop from 'react-props-noop';
import { connect } from 'react-redux';

import CityInput from '@/components/CityInput';
import WeatherItem from '@/components/CityWeather';
import CurrentLocation from '@/components/CurrentLocation';
import {
  getCoordinates,
  getUserLocation,
  getWeatherByCityName,
} from '@/actions/weather';

import './styles.css';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
    this.handleCityInputChange = this.handleCityInputChange.bind(this);
    this.handleCityInputClick = this.handleCityInputClick.bind(this);
  }

  componentDidMount() {
    const { getCoordinates, coordinates } = this.props;
    if (!Object.keys(coordinates).length) getCoordinates();
  }

  componentDidUpdate() {
    const {
      coordinates,
      weatherData,
      userLocation,
      getUserLocation,
      getWeatherByCityName,
    } = this.props;
    if (Object.keys(coordinates).length && !Object.keys(userLocation).length) {
      getUserLocation(coordinates);
    }
    if (!Object.keys(weatherData).length && userLocation.city) {
      getWeatherByCityName(userLocation.city);
    }
  }

  handleCityInputChange(e) {
    const inputValue = e.target.value;
    this.setState({ inputValue });
  }

  handleCityInputClick() {
    const { getWeatherByCityName } = this.props;
    const { inputValue } = this.state;
    getWeatherByCityName(inputValue);
  }

  render() {
    const {
      coordinates,
      weatherData,
      userLocation,
    } = this.props;

    return (
      <div className="weather">
        <h1>Weather</h1>
        <CurrentLocation
          coordinates={coordinates}
          address={userLocation}
        />
        <CityInput
          onChange={this.handleCityInputChange}
          onClick={this.handleCityInputClick}
        />
        {Object.keys(weatherData).length === 0
          ? <div className="error">No data. Please enter city</div>
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
  getUserLocation: PropTypes.func,
  getCoordinates: PropTypes.func,
  getWeatherByCityName: PropTypes.func,
};

Weather.defaultProps = {
  weatherData: {},
  userLocation: {},
  coordinates: {},
  getUserLocation: noop,
  getCoordinates: noop,
  getWeatherByCityName: noop,
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
    getWeatherByCityName: location => dispatch(getWeatherByCityName(location)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
