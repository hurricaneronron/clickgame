import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="pink darken-4">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">Clicky Game!</a>
            <ul id="nav-mobile" className="right">
              <li><a>Score: __ | Top Score: __</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;