import React from "react";
import {Link} from 'react-router-dom';
import "./notFound.css";

const NotFound = () => {
  return(
    <>
    <div className="notFound-container">
    <img className='img404' src='../img/404.svg' alt='404-not found' width='200px'/>
    <img className='gif404' src='../img/spinning-cat.gif' alt='404-not found' width='200px'/>
    </div>
    </>
  )
}
export default NotFound;