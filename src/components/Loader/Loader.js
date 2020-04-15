import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import styles from './Loader.module.css';
import PropTypes from 'prop-types';
const CustomLoader = ({ isActive }) => {
  return (
    isActive && (
      <div className={styles.loader}>
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </div>
    )
  );
};

CustomLoader.propTypes = {
  isActive: PropTypes.bool.isRequired,
};
export default CustomLoader;
