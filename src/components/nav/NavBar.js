import React from "react"
import {Link} from "react-router-dom"

export const NavBar = (props) => {
  return (
    <ul className="navbar">
      <li className="navbar__item active">
        <Link className="navbar__link" to="/">Home</Link>
      </li>
      <li className="navbar__item active">
        <Link className="navbar__link" to="/locations">Locations</Link>
      </li>
      <li className="navbar__item active">
        <Link className="navbar__link" to="/locations">Customers</Link>
      </li>
      <li className="navbar__item active">
        <Link className="navbar__link" to="/locations">Employees</Link>
      </li>
      <li className="navbar__item active">
        <Link className="navbar__link" to="/locations">Products</Link>
      </li>
    </ul>
  )
}