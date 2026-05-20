import React from 'react';
export default function Navbar() { 
  return (
    <nav className="navbar is-transparent py-4 px-6" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item title is-4 is-marginless" href="/" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          UNICO
        </a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <a className="navbar-item" href="#studio">Studio</a>
          <a className="navbar-item" href="#services">Services</a>
          <a className="navbar-item" href="#works">Works</a>
          <div className="navbar-item">
            <button className="button is-rounded is-black is-outlined">Let's Talk ↗</button>
          </div>
        </div>
      </div>
    </nav>
  ); 
}
