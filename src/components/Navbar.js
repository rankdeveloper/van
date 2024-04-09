import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineLogout } from 'react-icons/ai'
import logo from '../images/logo.png'
export default function Navbar() {
  const activeRoute = {
    textDecoration: "underline",
    color: "#161616"
  }

  function fakeLogOut() {
    localStorage.removeItem("loggedIn")
    console.log("Log out successfully")
  }
  return (
    <div className='navbar'>

      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>

      <div className='nav'>
        <ul>
          <li>
            <NavLink to="host" style={({ isActive }) => isActive ? activeRoute : null}>Host</NavLink>
          </li>

          <li>
            <NavLink to="about" style={({ isActive }) => isActive ? activeRoute : null}>About</NavLink>
          </li>

          <li>
            <NavLink to="vans" style={({ isActive }) => isActive ? activeRoute : null}>Vans</NavLink>
          </li>

          <li>
            <NavLink to="login" style={({ isActive }) => isActive ? activeRoute : null}>Login</NavLink>
          </li>
          <li onClick={fakeLogOut} className='main-log-out'>
            <AiOutlineLogout className="log-out"  />LogOut

          </li>
        </ul>

      </div>
    </div>
  )
}
