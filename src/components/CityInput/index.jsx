import React from 'react';
import PropTypes from 'prop-types';
import noop from 'react-props-noop';

import './styles.css';

const CityInput = (props) => {
  const {
    onChange,
    onClick,
  } = props;
  return (
    <div className="city-input">

      <input type="text" onChange={onChange} placeholder="ENTER CITY" />
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
  onChange: noop,
  onClick: noop,
};

export default CityInput;
