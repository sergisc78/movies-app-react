import React from 'react'
import movies from '../assets/img/movie-icon.png'
import { NavLink } from 'react-router-dom'

export const NavbarLoginComponent = () => {
    return (
        <nav className="navbar bg-body-tertiary  rounded">
            <div className="container-fluid">
                <NavLink to={'/'} className="nav-link active">Movies App<img src={movies} className='ms-3' alt="movieImage" height={30} width={30} /></NavLink>
                <NavLink to={'/'} className=" btn btn-dark">Home</NavLink>
            </div>
        </nav>
    )
}
