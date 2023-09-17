import React from "react";
import "./Button.sass";
import PropTypes from 'prop-types';

const Button = (props) => {
  const { text, className, disabled, loading, onClick } = props;
  return (
    <button disabled={disabled} className={className} onClick={() => onClick()}>
      {loading ? (
        <div className="spinner" />
      ) : (
        <span className="text">{text}</span>
      )}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
