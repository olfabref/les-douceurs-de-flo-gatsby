import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
//import logo from '../img/logo.svg'

const Navbar = () => (
  <nav className="navbar is-dark is-bold">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
            {/*<figure className="image">
            <img src={logo} alt="Les Douceurs de Flo" style={{ width: '88px' }} />
          </figure>*/}
          <span className="has-text-weight-bold">Les <span className="has-text-primary">Douceurs</span> de <span
                className="has-text-primary">Flo</span></span>
        </Link>
      </div>
      <div className="navbar-start">

      </div>
      <div className="navbar-end">
          <Link className="navbar-item" to="/products">
              Réalisations
          </Link>
        <Link className="navbar-item" to="/about">
              A propos
          </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
