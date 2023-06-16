import './App.css'
import { getMoviePopular, searchMovie} from "./api"
import { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'

const Popular = () => {
const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    getMoviePopular().then((result) => {
      setPopularMovies(result)
    })
  }, [])

  const search = async (q) => {
    if (q.length > 2) {
      const query = await searchMovie(q)
      setPopularMovies(query.results)
    }
  }

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className='Movie-wrapper' key={i}>
          <img className='Movie-image' src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} />
          <div className='Movie-title'>{movie.title}</div>
          <div className='Movie-date'>{movie.release_date}</div>
          <div className='Movie-rate'>Rating : {movie.vote_average}</div>
        </div>
      )
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='headerSearch'>
            <h1>Popular</h1>
                <input 
                    placeholder='cari film kamu...'
                    className='Movie-search'
                    onChange={({target}) => search(target.value)}
                />
        </div>
        <div className='Movie-container'>
          <PopularMovieList />
        </div>
      </header>
    </div>
  );
}

export default Popular;

