import { useState } from "react"

import Header from "./components/Header"
import MovieList from "./components/MovieList"
import Footer from "./components/Footer"

import movies from './data/movies.json'

function App() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies)


  const deleteMovie = (movieId) => {
    // get the new list of movies...
    const newList = moviesToDisplay.filter((movieDetails, i, arr) => {
      return movieDetails.id !== movieId;
    })

    // update state...
    // moviesToDisplay = newList; // NEVER, NEVER, MODIFY STATE DIRECTLY
    setMoviesToDisplay(newList)
  }


  return (
    <>
      <Header numberOfMovies={moviesToDisplay.length} />
      <MovieList moviesArr={moviesToDisplay} onDelete={deleteMovie} />
      <Footer />
    </>
  )
}

export default App
