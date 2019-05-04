import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const CityInput = (props) => {
  const {
    onChange,
    onClick,
  } = props;
  return (
    <div className="city-input">
      Enter city:
      <input type="text" onChange={onChange} />
      <button type="button" onClick={onClick}>
        Apply
      </button>
    </div>
  );
};

CityInput.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};

CityInput.defaultProps = {
  onChange: undefined,
  onClick: undefined,
};

export default CityInput;
