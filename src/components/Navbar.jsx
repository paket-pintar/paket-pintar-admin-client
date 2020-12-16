import React from "react"
import { useHistory } from "react-router-dom"
import { NavLink } from "react-router-dom"
import logo from '../assets/logo.png'

export default function Navbar() {
  const history = useHistory()

  function userLogout() {
    localStorage.clear()
    history.push("/login")
  }

  return (
    <nav className="w-60 main-navbar bg-nav">
      <div className="flex h-screen flex-col justify-between pl-8 py-16">
        <div className="justify-center flex flex-col">
          <div className="mb-20">
            <img className="navbar-logo" src={logo} alt="Logo"/>
          </div>
          <div>
            <NavLink
              className="nav-inactive"
       
              activeClassName="nav-active"
              to="/"
              exact={true}
            >
              Dashboard 
            </NavLink>
          </div>

          <div className="mt-5">
            <NavLink
              className="nav-inactive"
              activeClassName="nav-active"
              to="/history"
            >
              Packages
            </NavLink>
          </div>
        </div>

        <div>

          <button onClick={userLogout} className="nav-inactive">
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}
