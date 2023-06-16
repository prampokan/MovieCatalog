import './App.css'
import { getMovieTopRated, searchMovie} from "./api"
import { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'

const TopRated = () => {
const [topratedMovies, setTopratedMovies] = useState([])

  useEffect(() => {
    getMovieTopRated().then((result) => {
      setTopratedMovies(result)
    })
  }, [])

  const search = async (q) => {
    if (q.length > 2) {
      const query = await searchMovie(q)
      setTopratedMovies(query.results)
    }
  }

  const TopratedMovieList = () => {
    return topratedMovies.map((movieTopRated, i) => {
      return (
        <div className='Movie-wrapper' key={i}>
          <img className='Movie-image' src={`${process.env.REACT_APP_BASEIMGURL}/${movieTopRated.poster_path}`} />
          <div className='Movie-title'>{movieTopRated.title}</div>
          <div className='Movie-date'>{movieTopRated.release_date}</div>
          <div className='Movie-rate'>Rating : {movieTopRated.vote_average}</div>
        </div>
      )
    })
  }

  return (
    <div className="App">
      <header className="App-header">
      <div className='headerSearch'>
        <h1>top rated</h1>
        <input 
          placeholder='cari film kamu...'
          className='Movie-search'
          onChange={({target}) => search(target.value)}
        />
        </div>
        <div className='Movie-container'>
          <TopratedMovieList />
        </div>
      </header>
    </div>
  );
}

export default TopRated;

