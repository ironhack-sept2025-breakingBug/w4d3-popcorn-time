import { useState } from "react"
import { Route, Routes } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./pages/About"
import Contact from "./pages/Contact"
import MovieList from "./pages/MovieList"

import movies from './data/movies.json'
import MovieDetails from "./components/MovieDetails"

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

      <Routes>
        <Route path="/" element={<MovieList moviesArr={moviesToDisplay} onDelete={deleteMovie} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/movies/:movieId" element={<MovieDetails moviesArr={moviesToDisplay} />} />

        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
