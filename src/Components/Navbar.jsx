import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <a className="navbar-brand left nav-items" href="#home" style={{ fontSize: '2rem' }}>
          Portfolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse right" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link nav-items" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-items" href="#experience">Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-items" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-items" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-items" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
