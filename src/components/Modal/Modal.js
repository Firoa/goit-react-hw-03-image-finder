import React, { Component, createRef } from 'react';
import styles from './Modal.module.css';
class Modal extends Component {
  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleClose);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleClose);
  }

  handleClose = e => {
    if (e.code !== 'Escape') return;
    this.props.onClose();
  };
  handleBackdropClick = e => {
    const { current } = this.backdropRef;
    if (current && e.target !== current) return;
    this.props.onClose();
  };
  render() {
    console.log(this.props.largeURL);
    return (
      <div
        className={styles.Overlay}
        ref={this.backdropRef}
        onClick={this.handleBackdropClick}
      >
        <div className={styles.Modal}>
          <img src={this.props.largeURL} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
