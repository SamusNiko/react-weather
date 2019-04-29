/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

import './Location.css';

const Location = (props) => {
  const {
    address,
    coord,
  } = props;
  return (
    <div className="location">
      <div className="current-location">
        <b>Your Location:</b>
        <p>City: {address.city}</p>
        <p>Country: {address.country}</p>
        <p>Street: {address.road}</p>
      </div>
      <div className="location-coord">
        <b>Coordinate:</b>
        <p>Lat: {coord.lat}</p>
        <p>Lon: {coord.lon}</p>
      </div>
    </div>
  );
};

Location.propTypes = {
  address: PropTypes.objectOf(PropTypes.any),
  coord: PropTypes.objectOf(PropTypes.any),
};

Location.defaultProps = {
  address: null,
  coord: null,
};

export default Location;
