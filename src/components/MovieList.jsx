import { useState } from 'react'

import movies from '../data/movies.json'
import MovieSummary from './MovieSummary'

function MovieList() {

    const [moviesToDisplay, setMoviesToDisplay] = useState(movies)


    const deleteMovie = (movieId) => {
        
        // get the new list of movies...
        const newList = moviesToDisplay.filter( (movieDetails, i, arr) => {
            if(movieDetails.id !== movieId) {
                return true
            } else {
                return false
            }
        })

        // update state...
        // moviesToDisplay = newList; // NEVER, NEVER, MODIFY STATE DIRECTLY
        setMoviesToDisplay(newList)
    }

    return (
        <>
            <h1>Number of movies: {moviesToDisplay.length}</h1>

            {moviesToDisplay.map((movieObj, i, arr) => {
                return (
                    <MovieSummary 
                        key={movieObj.id} 
                        movieDetails={movieObj}
                        onDelete={deleteMovie}
                    />
                )
            })}
        </>
    )
}

export default MovieList