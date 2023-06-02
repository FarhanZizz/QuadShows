import React from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <span>Quad</span>Shows
      </Link>
      <ul className="nav-links">
        <div className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Pricing</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar
