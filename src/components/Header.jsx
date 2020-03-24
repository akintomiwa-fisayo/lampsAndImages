import React from 'react';
import '../css/header.css';
import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';

class Header extends React.Component {
  render() {
    return (
      <div data-comp="Header">
        {/* <img src={logo} alt="" className="logo" /> */}
        <span className="logo">lampsAndImages</span>
        <div className="nav-links">
          <a href="/" className="nav-link active">home</a>
          <a href="/hire" className="nav-link">hire equipments</a>
          <a href="/about" className="nav-link">about us</a>
          <a href="/contact" className="nav-link">contact us</a>
        </div>
      </div>
    );
  }
}

export default Header;
