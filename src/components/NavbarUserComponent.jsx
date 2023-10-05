import React from 'react'
import movies from '../assets/img/movie-icon.png'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'




export const NavbarUserComponent = () => {

  const { user, logout, loading } = useAuth();

  //console.log(user);

  // LOGOUT
  const handleLogout = async () => {
    try {
      //throw new Error('Google error !')
      await logout();
    } catch (error) {
      console.error('There is an error', error);
    }

  }

  if (loading) return <h4>Loading...</h4>


  return (
    <nav className="navbar bg-body-tertiary  rounded">
      <div className="container-fluid">
        <NavLink to={'/'} className="nav-link active">Movies App<img src={movies} className='ms-3' alt="movieImage" height={30} width={30} /></NavLink>
        <h4 className=' user-email text-black ms-auto me-5 mt-1'>Hello : {user.displayName || user.email}</h4>
        <button className=" btn btn-dark" onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  )
}
