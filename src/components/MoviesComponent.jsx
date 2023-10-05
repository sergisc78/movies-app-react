import React, { useState } from 'react'


export const MoviesComponent = () => {


    // URL I API KEY DE L'API 
    const urlBase = 'https://api.themoviedb.org/3/search/movie'
    const API_KEY = '80f9160b0356b4846597ebda80c0cc38'


    // USESTATE PER CAPTURAR EL QUE S'ESCRIU A L'INPUT
    const [search, setSearch] = useState('')
    const [movies, setMovies] = useState([])


    // CAPTURA EL VALOR DE L'INPUT
    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    // ENVIA LES DADES
    const handleSubmit = (e) => {
        e.preventDefault();
        if (search.length > 0) {
            fetchMovies();
        }
    }

    //REBRE LES DADES DESDE L'API
    const fetchMovies = async () => {
        try {
            const response = await fetch(`${urlBase}?query=${search}&api_key=${API_KEY}`);
            const data = await response.json();
            //console.log(data.results);
            setMovies(data.results);

        } catch (error) {
            console.error('There is an error', error);
        }
    }

    return (
        <>

            <form onSubmit={handleSubmit}>
                <h2 className='mt-4'>Search a movie by title</h2>
                <div className='d-flex justify-content-center mt-5 container'>
                    <input className='searchMovie' value={search} onChange={handleChange} type="text" name="searchMovie" placeholder='Search a movie' />
                    <button type="submit" className="btn btn-primary search">Search</button>

                </div>
            </form>


            <div className='movie-list mt-3'>
                {movies.map((movie) => (
                    <div key={movie.id} className="movie-card">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                        <h2 className='text-black'>{movie.title}</h2>
                        {movie.vote_average < 5 ? <span class="badge  rounded-pill  text-bg-danger w-100 mt-3 mb-3 fs-5"><h6 className='text-center  '>Average  </h6>{movie.vote_average}</span> :
                            <span className="badge rounded-pill text-bg-primary w-100 mt-3 mb-3 fs-5 "><h6 className='text-center  '>Average  </h6>{movie.vote_average}</span>}
                        <p className='overview'>{movie.overview}</p>
                    </div>
                ))}
            </div>


        </>
    )
}
