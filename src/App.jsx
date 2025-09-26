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
  const [title, setTitle] = useState('')


  const deleteMovie = (movieId) => {
    // get the new list of movies...
    const newList = moviesToDisplay.filter((movieDetails, i, arr) => {
      return movieDetails.id !== movieId;
    })

    // update state...
    // moviesToDisplay = newList; // NEVER, NEVER, MODIFY STATE DIRECTLY
    setMoviesToDisplay(newList)
  }


  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    
    const newMovie = {
      title: title
    }

    // prepare an array with the new list of movies
    const newList = [newMovie, ...moviesToDisplay]

    // update the list of movies
    setMoviesToDisplay(newList)

    // clear form
    setTitle('')
  }


  return (
    <>
      <Header numberOfMovies={moviesToDisplay.length} />

      <section className="card">
        <h2>Add your own movie:</h2>

        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="title" 
            placeholder="enter the title" 
            value={title} 
            onChange={(e) => { setTitle(e.target.value) }}
          />
          <button>Create</button>
        </form>

      </section>

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
