/* eslint-disable no-shadow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Weather.css';
import { connect } from 'react-redux';
import WeatherDrow from '../../Components/WeatherDrow/WeatherDrow';
import Location from '../../Components/Location/Location';
import { makeRequest, inputChange, putButton } from '../../store/actions/weather';

class Weather extends Component {
  componentDidMount() {
    const { makeRequest } = this.props;
    makeRequest();
  }

  render() {
    const {
      weatherData,
      location,
      inputChange,
      putButton,
      inputValue,
    } = this.props;
    return (
      !weatherData ? <div>Loading</div> : (
        <div className="Weather">
          <h1>Weather</h1>
          <Location
            location={location}
            onChange={event => inputChange(event.target.value)}
            putButton={() => putButton(inputValue)}
          />
          <WeatherDrow
            location={location}
            weatherData={weatherData}
          />
        </div>
      ));
  }
}

Weather.propTypes = {
  weatherData: PropTypes.objectOf(PropTypes.any),
  location: PropTypes.string,
  inputChange: PropTypes.func,
  putButton: PropTypes.func,
  inputValue: PropTypes.string,
  makeRequest: PropTypes.func,
};
Weather.defaultProps = {
  weatherData: null,
  location: '',
  inputChange: undefined,
  putButton: undefined,
  inputValue: null,
  makeRequest: undefined,
};

function mapStateToProps(state) {
  return {
    location: state.weather.location,
    zip: state.weather.zip,
    weatherData: state.weather.weatherData,
    inputValue: state.weather.inputValue,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    makeRequest: () => dispatch(makeRequest()),
    inputChange: location => dispatch(inputChange(location)),
    putButton: inputValue => dispatch(putButton(inputValue)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
