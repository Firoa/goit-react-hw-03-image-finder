import React from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';
const Button = ({ handleClick }) => {
  return (
    <button className={styles.Button} type="button" onClick={handleClick}>
      Load more
    </button>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Button;
