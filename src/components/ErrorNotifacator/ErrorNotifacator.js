import React from 'react';
import PropTypes from 'prop-types';
const ErrorNotificator = ({ text }) => <h2>Something Go Wrong: {text}</h2>;

ErrorNotificator.propTypes = {
  text: PropTypes.string.isRequired,
};
export default ErrorNotificator;
