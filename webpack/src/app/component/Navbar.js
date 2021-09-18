import React from 'react'
import {Link} from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <Link to={"/"} className="navbar-brand text-white">React</Link>
          <form className="form-inline">
            <Link to={"/"} className="nav-link text-white">Home</Link>
            <Link to={"/about"} className="nav-link text-white">About</Link>
          </form>
        </div>
      </nav>
    )
  }
}

export default Navbar;
