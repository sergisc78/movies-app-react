import React from 'react'
import { NavbarComponent } from '../components/NavbarComponent'
import movies from '../assets/img/movie-icon.png'
import email from '../assets/img/email.png'
import jaws from '../assets/img/jaws.jpeg'
import predator from '../assets/img/predator.jpeg'
import alien from '../assets/img/alien.jpeg'
import terminator from '../assets/img/terminator.jpeg'
import star_wars from '../assets/img/star-wars.jpeg'
import godfather from '../assets/img/godfather.png'

export const Home = () => {
  return (
    <>
      <NavbarComponent></NavbarComponent>

      <h2 className=' text-black mt-5'>Find your favorite movie or serie !</h2>
      <div className="container c-carousel wrapper d-flex align-items-center justify-content-center mb-5">
        <div id="carouselExample" className="carousel slide mt-5 w-100 p-2">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={alien} className="d-block m-auto" alt="..." height={400} width={400} />
            </div>
            <div class="carousel-item">
              <img src={predator} class="d-block m-auto" alt="..." height={400} width={400} />
            </div>
            <div class="carousel-item">
              <img src={jaws} className=" d-block m-auto" alt="..." height={400} width={400} />
            </div>
            <div class="carousel-item">
              <img src={terminator} className=" d-block m-auto" alt="..." height={400} width={400} />
            </div>
            <div class="carousel-item">
              <img src={star_wars} className=" d-block m-auto" alt="..." height={400} width={400} />
            </div>
            <div class="carousel-item">
              <img src={godfather} className=" d-block m-auto" alt="..." height={400} width={400} />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

    </>
  )
}
