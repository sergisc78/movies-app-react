import React from 'react'
import user from '../assets/img/user.png'
import movies from '../assets/img/movie-icon.png'
import { NavLink } from 'react-router-dom'

export const NavbarComponent = () => {
  return (

    <nav className="navbar bg-body-tertiary  rounded">
      <div className="container-fluid">
        <NavLink to={'/'} className="nav-link active  " href="#">Movies App<img src={movies} className='ms-3' alt="movieImage" height={30} width={30} /></NavLink>
        <NavLink to={'/login'} className="nav-link user-icon" title='My Account'><img src={user} alt="userImage" height={30} width={30} /></NavLink>
      </div>
    </nav>

  )
}
