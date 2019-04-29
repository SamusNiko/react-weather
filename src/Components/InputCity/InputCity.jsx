import React from 'react';
import PropTypes from 'prop-types';

import './InputCity.css';

const InputCity = (props) => {
  const {
    onChange,
    putButton,
  } = props;
  return (
    <div className="input-city">
      Enter city:
      <input type="text" onChange={onChange} />
      <button type="button" onClick={putButton}>
        Apply
      </button>
    </div>
  );
};

InputCity.propTypes = {
  onChange: PropTypes.func,
  putButton: PropTypes.func,
};

InputCity.defaultProps = {
  onChange: undefined,
  putButton: undefined,
};

export default InputCity;
