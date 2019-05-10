import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const checkObjectProperty = (obj, key) => {
  if (obj[key]) {
    return (<p key={key}>{key}: {obj[key]}</p>);
  }
  return null;
};

const currentLocationRender = (address) => {
  if (address.error) {
    return (
      <div className="error">
       Location Error: {address.error}
      </div>
    );
  }
  if (Object.keys(address).length !== 0) {
    return (
      <div className="current-location">
        <b>Your Location:</b>
        {Object.keys(address).map(key => checkObjectProperty(address, key))}
      </div>
    );
  }
  return null;
};

const CurrentLocation = (props) => {
  const {
    address,
    coordinates,
  } = props;
  if (Object.keys(address).length || Object.keys(coordinates).length) {
    return (
      <div className="location">
        {currentLocationRender(address)}
        {Object.keys(coordinates).length !== 0
          ? (
            <div className="location-coordinates">
              <b>Coordinates:</b>
              {Object.keys(coordinates).map(key => checkObjectProperty(coordinates, key))}
            </div>
          )
          : null}
      </div>
    );
  }
  return null;
};

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