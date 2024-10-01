import React from 'react';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-sm bg-light">
      <div className="container-fluid p-0"> {}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Link 1</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link 2</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link 3</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
