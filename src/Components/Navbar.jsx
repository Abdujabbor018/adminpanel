import React from 'react'

const Navbar = () => {
  return (
    <header className="navbar">
      <h2>Dashboard</h2>

      <div className="navbar-right">
        <span className="user-name">Admin</span>
        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="avatar"
        />
      </div>
    </header>
  )
}


export default Navbar