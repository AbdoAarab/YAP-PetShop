import React from "react";
import {Link} from 'react-router-dom';

const NotFound = () => {
  return(
    <>
    <Link to={'/'} className='logo404'>
        <img src="../img/logo.png" alt="logo" width='120px'/>
      </Link>
    <img className='img404' src='../img/404.png' alt='404-not found'/>
    </>
  )
}
export default NotFound;