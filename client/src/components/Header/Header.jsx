import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingBag } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import './Header.css';

const Header = ({
  numberCartProduct,
  isLogin,
  openModalAuthHandler,
  handleLoginOut,
  usernameLoggedIn,
}) => {
  return (
    <header className='header'>
      <Link to={'/'} className='logo-img' onClick={window.scrollTo(0, 0)}>
        <img src='../img/logo.svg' alt='logo' width='120px' />
      </Link>
      <div className='signin-cart-holder'>
        {!isLogin && (
          <button
            className='signin-btn'
            onClick={() => openModalAuthHandler(true)}>
            Sign in
          </button>
        )}
        {isLogin && <button className='signin-btn'>{usernameLoggedIn}</button>}

        <div className='icons-card'>
          <Link className='icons' to={'/cart'}>
            <FaShoppingBag className='cart-icon' />
            <span className='product-num'>{numberCartProduct}</span>
          </Link>
          {isLogin && (
            <div className='icons-logout' onClick={handleLoginOut}>
              <FiLogOut className='cart-icon' />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
