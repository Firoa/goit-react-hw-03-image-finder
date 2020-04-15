import React from 'react';
import styles from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
const ImageGallery = ({ items, openModal }) => (
  <ul className={styles.IG}>
    {items.map(item => (
      <ImageGalleryItem
        previewURL={item.webformatURL}
        tag={item.tag}
        key={uuidv4()}
        openModalOnClick={() => openModal(item.id)}
      />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  items: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGallery;
