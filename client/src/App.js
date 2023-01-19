import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

import {
  Header,
  LandingImage,
  NotFound,
  Cart,
  ProductsList,
  ProductDetails,
  Modal,
  LoginForm,
  Footer,
} from './components';

class App extends Component {
  state = {
    numberCartProduct: 0,
    cartProduct: [],
    isLogin: false,
    isOpenModalAuth: false,
    username: '',
  };

  updateNumberCartProduct = () => {
    this.setState({
      numberCartProduct: JSON.parse(localStorage.getItem('products'))
        ? JSON.parse(localStorage.getItem('products')).length
        : 0,
    });
  };
  updateCartProduct = () => {
    this.setState({
      cartProduct: JSON.parse(localStorage.getItem('products')),
    });
  };

  deleteCartProduct = (productId) => {
    const { cartProduct } = this.state;
    const filteredCartProducts = cartProduct.filter(
      ({ id }) => id !== productId,
    );

    localStorage.setItem('products', JSON.stringify(filteredCartProducts));

    this.alertSuccess('Deleted From Cart Successfully');
    this.setState({
      cartProduct: filteredCartProducts,
    });
    this.updateNumberCartProduct();
  };

  checkOut = () => {
    localStorage.setItem('products', JSON.stringify([]));
    this.setState({ cartProduct: [] });
    this.updateNumberCartProduct();
    this.alertSuccess(
      'Thank you! This pet will be delivered to you as soon as possible',
    );
  };

  componentDidMount() {
    this.updateNumberCartProduct();
    this.updateCartProduct();
    this.checkIsLogin();
  }

  alertSuccess = (message) => {
    return toast.success(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  alertError = (message) => {
    return toast.error(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  openModalAuthHandler = (isOpen) => {
    this.setState({
      isOpenModalAuth: isOpen,
    });
  };

  checkIsLogin = () => {
    this.setState({
      isLogin: JSON.parse(localStorage.getItem('isLogin')) ?? false,
    });
  };

  handleLoginIn = (username,password) => {
    
    if (!username||!password) {
      this.alertError('Please check your username & password');
      this.openModalAuthHandler(false);
      this.setState({
        isLogin: false,
        username: '',
        password: '',
      });
      return;
    }

    localStorage.setItem('isLogin', true);
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    this.setState({
      isLogin: true,
      username: username,
      password: password,
    });
    this.alertSuccess('Login SuccessFully');
    this.openModalAuthHandler(false);
  };

  handleLoginOut = () => {
    localStorage.removeItem('isLogin');
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    this.setState({
      isLogin: false,
      username: '',
      password: '',
    });
    this.alertSuccess('Logout SuccessFully');
    this.openModalAuthHandler(false);
  };

  handleChangeUserName = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleChangePassword = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      numberCartProduct,
      cartProduct,
      isLogin,
      isOpenModalAuth,
      username,
      password,
    } = this.state;

    const usernameLoggedIn = localStorage.getItem('username');

    return (
      <BrowserRouter>
        <div>
          <Header
            isLogin={isLogin}
            usernameLoggedIn={usernameLoggedIn}
            handleLoginOut={this.handleLoginOut}
            numberCartProduct={numberCartProduct}
            openModalAuthHandler={this.openModalAuthHandler}
          />
          <div className='header-backdrop'></div>
          <Switch>
          <Route
              exact path='/'
              render={(props) => (
                <div>
                <LandingImage />
                <ProductsList
                  isLogin={isLogin}
                  alertSuccess={this.alertSuccess}
                  alertError={this.alertError}
                  updateNumberCartProduct={this.updateNumberCartProduct}
                  cartProduct={cartProduct}
                  updateCartProduct={this.updateCartProduct}
                />
                </div>
              )}
            />
            <Route
              path='/product/:id'
              render={(props) => (
                <div>
                <ProductDetails
                  alertSuccess={this.alertSuccess}
                  alertError={this.alertError}
                  updateNumberCartProduct={this.updateNumberCartProduct}
                  updateCartProduct={this.updateCartProduct}
                  {...props}
                />
              
                </div>
              )}
            />
            <Route
              path='/cart'
              render={(props) => (
                <Cart
                  cartProduct={cartProduct}
                  updateCartProduct={this.updateCartProduct}
                  deleteCartProduct={this.deleteCartProduct}
                  checkOut={this.checkOut}
                  {...props}
                />
              )}
            />
            <Route path='/notFound' component={NotFound} />
            <Redirect to='notFound' />
          </Switch>
          <Footer />
          <ToastContainer
            position='top-right'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />

          {isOpenModalAuth && (
            <Modal
              username={username}
              closeModalHandler={() => this.openModalAuthHandler(false)}>
              <LoginForm
                handleLoginIn={this.handleLoginIn}
                handleChangeUserName={this.handleChangeUserName}
                handleChangePassword={this.handleChangePassword}
                username={username}
                password={password}
              />
            </Modal>
          )}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
