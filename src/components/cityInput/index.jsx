import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const CityInput = (props) => {
  const {
    onChange,
    onButtonClick,
  } = props;
  return (
    <div className="city-input">
      Enter city:
      <input type="text" onChange={onChange} />
      <button type="button" onClick={onButtonClick}>
        Apply
      </button>
    </div>
  );
};

CityInput.propTypes = {
  onChange: PropTypes.func,
  onButtonClick: PropTypes.func,
};

CityInput.defaultProps = {
  onChange: undefined,
  onButtonClick: undefined,
};

export default CityInput;
