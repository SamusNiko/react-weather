import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CityInput from '@components/cityInput/index';
import DrawWeather from '@components/drawWeather/index';
import CurrentLocation from '@components/currentLocation/index';
import {
  getCoordinates,
  getUserLocation,
  getWeather,
  onButtonClick,
} from '@actions/weather';

import './Weather.css';

class Weather extends Component {
  constructor() {
    super();
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
      getWeather,
    } = this.props;
    if (Object.keys(coordinates).length !== 0 && Object.keys(userLocation).length === 0) {
      getUserLocation(coordinates);
    }
    if (Object.keys(weatherData).length === 0 && Object.keys(userLocation).length !== 0) {
      getWeather(userLocation.city);
    }
  }

  inputChange(value) {
    this.setState({ inputValue: value });
  }

  render() {
    const {
      coordinates,
      weatherData,
      userLocation,
      onButtonClick,
    } = this.props;
    const { inputValue } = this.state;

    return (
      <div className="weather">
        <h1>Weather</h1>
        {Object.keys(userLocation).length !== 0
          ? (
            <CurrentLocation
              coordinates={coordinates}
              address={userLocation}
            />
          )
          : null
        }
        <CityInput
          onChange={event => this.inputChange(event.target.value)}
          onButtonClick={() => onButtonClick(inputValue)}
        />
        {Object.keys(weatherData).length === 0
          ? <div>No data. Please enter city</div>
          : (
            <DrawWeather
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
  userLocation: PropTypes.objectOf(PropTypes.string),
  coordinates: PropTypes.objectOf(PropTypes.string),
  onButtonClick: PropTypes.func,
  getUserLocation: PropTypes.func,
  getCoordinates: PropTypes.func,
  getWeather: PropTypes.func,
};

Weather.defaultProps = {
  weatherData: {},
  userLocation: {},
  coordinates: {},
  onButtonClick: undefined,
  getUserLocation: undefined,
  getCoordinates: undefined,
  getWeather: undefined,
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
    getWeather: userLocation => dispatch(getWeather(userLocation)),
    onButtonClick: inputValue => dispatch(onButtonClick(inputValue)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
