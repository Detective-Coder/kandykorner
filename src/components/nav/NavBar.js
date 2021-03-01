import React from "react"
import {Link} from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
  return (
    <ul className="navbar">
      <li className="navbar__item active">
        <link className="navbar__link" to="/">Locations</link>
      </li>
    </ul>
  )
}