import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { AppContainer } from 'App.styled';
import ImageGallery from './ImageGallery';
import Searchbar from './Searchbar';
export class App extends Component {
  state = {
    query: '',
  };

  handleFormSubmit = query => {
    this.setState({ query });
  };

  render() {
    const { query } = this.state;
    return (
      <AppContainer>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery query={query} />

        <ToastContainer autoClose={3000} theme="colored" />
      </AppContainer>
    );
  }
}
