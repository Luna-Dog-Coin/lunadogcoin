import React from 'react';
import './index.scss';
import Logo from '../../assets/logo.png';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="left">
          <img src={Logo}></img>
        </div>
        <div className="right">
          <a href="#tokenomics">Tokenomics</a>
          <a href="#community">Community</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#">How to buy</a>
          <a href="#">Whitepaper</a>
        </div>
      </div>
    </div>
  )
}