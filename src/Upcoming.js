import './App.css'
import { getMovieUpcoming, searchMovie} from "./api"
import { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'

const Upcoming = () => {
const [upcomingMovies, setUpcomingMovies] = useState([])

  useEffect(() => {
    getMovieUpcoming().then((result) => {
      setUpcomingMovies(result)
    })
  }, [])

  const search = async (q) => {
    if (q.length > 2) {
      const query = await searchMovie(q)
      setUpcomingMovies(query.results)
    }
  }

  const UpcomingMovieList = () => {
    return upcomingMovies.map((movieUpcoming, i) => {
      return (
        <div className='Movie-wrapper' key={i}>
          <img className='Movie-image' src={`${process.env.REACT_APP_BASEIMGURL}/${movieUpcoming.poster_path}`} />
          <div className='Movie-title'>{movieUpcoming.title}</div>
          <div className='Movie-date'>{movieUpcoming.release_date}</div>
          <div className='Movie-rate'>Rating : {movieUpcoming.vote_average}</div>
        </div>
      )
    })
  }
  
  return (
    <div className="App">
      <header className="App-header">
      <div className='headerSearch'>
        <h1>Upcoming</h1>
        <input 
          placeholder='cari film kamu...'
          className='Movie-search'
          onChange={({target}) => search(target.value)}
        />
        </div>
        <div className='Movie-container'>
          <UpcomingMovieList />
        </div>
      </header>
    </div>
  );
}

export default Upcoming;
