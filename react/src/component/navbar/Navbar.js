import React from 'react';
import {Link} from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to={"/"} className="navbar-brand">React</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {this.props.data.map((item, index) => {
                return (
                  <li key={index} className="nav-item">
                    <Link  to={item.link} className='nav-link text-white'>{item.text}</Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </nav>

    )
  }
}

export default Navbar;
