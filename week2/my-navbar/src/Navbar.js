import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-light">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#link1">Link 1</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#link2">Link 2</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#link3">Link 3</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

