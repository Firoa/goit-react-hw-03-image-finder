import React from 'react';
import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';
const ImageGalleryItem = ({ previewURL, tag, openModalOnClick }) => {
  return (
    <li className={styles.ImageGalleryItem} onClick={openModalOnClick}>
      <img
        src={previewURL}
        alt={tag}
        className={styles.ImageGalleryItemImage}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  previewURL: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  openModalOnClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
