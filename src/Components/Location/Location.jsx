import React from 'react';
import PropTypes from 'prop-types';
import './Location.css';

const Location = (props) => {
  const { location, onChange, putButton } = props;
  return (
    <div className="Location">
      <div>
            Location:
        <p className="currentLocation">{location}</p>
      </div>
      <div>
          Enter city:
        <input className="Location_Input" type="text" onChange={onChange} />
        <button type="button" onClick={putButton}>
            Apply
        </button>
      </div>
    </div>
  );
};

Location.propTypes = {
  location: PropTypes.string,
  onChange: PropTypes.func,
  putButton: PropTypes.func,
};

Location.defaultProps = {
  location: '',
  onChange: undefined,
  putButton: undefined,
};

export default Location;
