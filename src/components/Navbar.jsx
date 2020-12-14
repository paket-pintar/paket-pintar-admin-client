import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Navbar () {
  return (
    <nav class="w-60 main-navbar bg-nav">
    <div class="flex h-screen flex-col justify-between pl-8 py-16">
      <div>
        <div>
          <NavLink className="nav-inactive" activeClassName="nav-active" to="/" exact={true}>Dashboard</NavLink>
        </div>

        <div className="mt-5">
          <NavLink className="nav-inactive" activeClassName="nav-active" to="/history">History</NavLink>
        </div>
        
      </div>

      <div>
        <NavLink className="nav-inactive" to="/login">Login</NavLink><br></br>
        <button class="nav-inactive">Logout</button>
      </div>

    </div>
  </nav>
  )
}