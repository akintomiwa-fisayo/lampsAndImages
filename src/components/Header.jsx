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
          <NavLink to="/" className="nav-link">home</NavLink>
          <NavLink to="/hire" className="nav-link">hire equipments</NavLink>
          <NavLink to="/about" className="nav-link">about us</NavLink>
          <NavLink to="/contact" className="nav-link">contact us</NavLink>
        </div>
      </div>
    );
  }
}

export default Header;
