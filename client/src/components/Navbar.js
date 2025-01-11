import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar({ title = 'Title', mode, toggleMode }) {
  return (

    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: mode }}>
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">{title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" aria-current="page" to="/about">About</Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
          <div className="form-check">
            <input
              className="form-check-input blue-radio"
              type="radio"
              id="blue-mode"
              value="blue"
              checked={mode === 'blue'}
              onChange={() => toggleMode('blue')}
            />
            {/* <label className="form-check-label text-white" htmlFor="blue-mode">Blue Mode</label> */}
          </div>

          <div className="form-check">
            <input
              className="form-check-input black-radio"
              type="radio"
              id="black-mode"
              value="black"
              checked={mode === 'black'}
              onChange={() => toggleMode('black')}
            />
            <label className="form-check-label text-white" htmlFor="black-mode">Black Mode</label>
          </div>

        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};