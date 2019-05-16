import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';


class CurrentLocation extends Component {
  currentLocationRender(address) {
    if (address.error) {
      return (
        <div className="error">
          Location Error: {address.error}
        </div>
      );
    }
    if (Object.keys(address).length) {
      return (
        <div className="current-location">
          <h3>Your Location:</h3>
          {Object.keys(address).map(this.renderObjectProperty, address)}
        </div>
      );
    }
    return null;
  }

  coordinatesRender(coordinates) {
    if (Object.keys(coordinates).length) {
      return (
        <div className="location-coordinates">
          <h3>Coordinates:</h3>
          {Object.keys(coordinates).map(this.renderObjectProperty, coordinates)}
        </div>
      );
    }
    return null;
  }

  renderObjectProperty(value) {
    if (this[value]) {
      return (<p key={value}>{value}: {this[value]}</p>);
    }
    return null;
  }

  render() {
    const {
      address,
      coordinates,
    } = this.props;
    if (Object.keys(address).length || Object.keys(coordinates).length) {
      return (
        <div className="location clearfix">
          {this.currentLocationRender(address)}
          {this.coordinatesRender(coordinates)}
        </div>
      );
    }
    return null;
  }
}

CurrentLocation.propTypes = {
  address: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
    street: PropTypes.string,
    error: PropTypes.string,
  }),
  coordinates: PropTypes.shape({
    lat: PropTypes.string,
    lon: PropTypes.string,
  }),
};

CurrentLocation.defaultProps = {
  address: {},
  coordinates: {},
};

export default CurrentLocation;
