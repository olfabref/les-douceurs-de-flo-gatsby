import React from 'react'
import Link from 'gatsby-link'

import Logo from "./Logo";

const Navbar = () => (
  <nav className="navbar is-dark is-bold">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <Logo />
        </Link>
      </div>
      <div className="navbar-start">

      </div>
      <div className="navbar-end">
        <Link className="navbar-item" to="/recettes">
          Recettes
        </Link>
        <Link className="navbar-item" to="/about">
          A propos
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
