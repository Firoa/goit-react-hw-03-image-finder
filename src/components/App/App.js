import React, { Component } from 'react';
import styles from './App.module.css';
import Searchbar from '../Searchbar/Searchbar';
import CustomLoader from '../Loader/Loader';
import fetchImgWithQuery from '../../services/services';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import ErrorNotificator from '../ErrorNotifacator/ErrorNotifacator';
import Modal from '../Modal/Modal';
class App extends Component {
  state = {
    query: '',
    page: 1,
    img: [],
    isLoading: false,
    error: null,
    isOpen: false,
    modalUrl: '',
  };

  handleModalOpen = id => {
    console.log(id);
    const { largeImageURL } = this.state.img.find(item => item.id === id);
    console.log(largeImageURL);
    this.setState({ modalUrl: largeImageURL });
    this.setState({ isOpen: true });
  };

  handleModalClose = () => {
    this.setState({ isOpen: false });
  };

  handlerSearch = searchStr => {
    this.setState({ query: searchStr, page: 1 });
  };

  addMore = () => {
    console.log('Add more logic', this.state);
    this.setState({ isLoading: true });
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetchImgWithQuery('')
      .then(img => {
        this.setState({ img });
        console.log(this.state);
      })
      .catch(error => {
        this.setState({ error });
      })
      .finally(() => this.setState({ isLoading: false }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      this.setState({ isLoading: true });
      console.log('DID UBDATE STATE:', this.state);
      fetchImgWithQuery(this.state.query, this.state.page)
        .then(img => {
          prevState.query !== this.state.query
            ? this.setState({ img: img })
            : this.setState(prevState => ({ img: [...prevState.img, ...img] }));
        })
        .catch(error => this.setState({ error }))
        .finally(() => {
          this.setState({ isLoading: false });
          this.ScroleFunc();
        });
    }
  }

  ScroleFunc = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  render() {
    const { img, isLoading, error, isOpen, modalUrl } = this.state;
    return (
      <div className={styles.App}>
        <Searchbar onSearchSubmit={this.handlerSearch} />
        {error && <ErrorNotificator text={error.message} />}
        {isLoading && <CustomLoader isActive={true} />}
        {img.length > 0 && (
          <ImageGallery items={img} openModal={this.handleModalOpen} />
        )}
        {img.length > 0 && <Button handleClick={this.addMore} />}
        {isOpen && (
          <Modal largeURL={modalUrl} onClose={this.handleModalClose} />
        )}
      </div>
    );
  }
}

export default App;
