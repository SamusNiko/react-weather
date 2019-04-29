/* eslint-disable no-shadow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import InputCity from '../../Components/InputCity/InputCity';
import WeatherDrow from '../../Components/WeatherDrow/WeatherDrow';
import Location from '../../Components/Location/Location';
import {
  getCoord,
  getYourLocation,
  getWeather,
  inputChange,
  putButton,
} from '../../actions/weather';

import './Weather.css';

class Weather extends Component {
  componentDidMount() {
    const { getCoord, coord } = this.props;
    if (coord === null) getCoord();
  }

  componentWillReceiveProps(nextProps) {
    const {
      getYourLocation,
      getWeather,
      coord,
      yourLocation,
      weatherData,
    } = nextProps;
    if (coord !== null && yourLocation === null) getYourLocation(coord);
    if (weatherData === null && yourLocation !== null) getWeather(yourLocation.city);
  }

  render() {
    const {
      coord,
      weatherData,
      yourLocation,
      inputChange,
      putButton,
      inputValue,
    } = this.props;
    return (
      <div className="weather">
        <h1>Weather</h1>
        {!yourLocation
          ? <div>Sorry, your location is not defined</div>
          : (
            <Location
              coord={coord}
              address={yourLocation}
            />
          )}
        <InputCity
          onChange={event => inputChange(event.target.value)}
          putButton={() => putButton(inputValue)}
        />
        {!weatherData
          ? <div>No data. Please enter city</div>
          : (
            <WeatherDrow
              location={yourLocation}
              weatherData={weatherData}
            />
          )}
      </div>
    );
  }
}

Weather.propTypes = {
  weatherData: PropTypes.objectOf(PropTypes.any),
  yourLocation: PropTypes.objectOf(PropTypes.any),
  coord: PropTypes.objectOf(PropTypes.any),
  inputChange: PropTypes.func,
  putButton: PropTypes.func,
  inputValue: PropTypes.string,
  getYourLocation: PropTypes.func,
  getCoord: PropTypes.func,
  getWeather: PropTypes.func,
};
Weather.defaultProps = {
  weatherData: null,
  yourLocation: null,
  coord: null,
  inputChange: undefined,
  putButton: undefined,
  inputValue: null,
  getYourLocation: undefined,
  getCoord: undefined,
  getWeather: undefined,
};

function mapStateToProps(state) {
  return {
    coord: state.weather.coord,
    yourLocation: state.weather.yourLocation,
    weatherData: state.weather.weatherData,
    inputValue: state.weather.inputValue,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCoord: () => dispatch(getCoord()),
    getYourLocation: coord => dispatch(getYourLocation(coord)),
    getWeather: yourlocation => dispatch(getWeather(yourlocation)),
    inputChange: location => dispatch(inputChange(location)),
    putButton: inputValue => dispatch(putButton(inputValue)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
