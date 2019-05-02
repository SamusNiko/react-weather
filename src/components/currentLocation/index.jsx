/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const CurrentLocation = (props) => {
  const {
    address,
    coordinates,
  } = props;
  return (
    <div className="location">
      <div className="current-location">
        <b>Your Location:</b>
        <p>City: {address.city}</p>
        <p>Country: {address.country}</p>
        <p>Street: {address.road}</p>
      </div>
      <div className="location-coordinates">
        <b>Coordinates:</b>
        <p>Lat: {coordinates.lat}</p>
        <p>Lon: {coordinates.lon}</p>
      </div>
    </div>
  );
};

CurrentLocation.propTypes = {
  address: PropTypes.objectOf(PropTypes.string),
  coordinates: PropTypes.objectOf(PropTypes.string),
};

CurrentLocation.defaultProps = {
  address: {},
  coordinates: {},
};

export default CurrentLocation;
