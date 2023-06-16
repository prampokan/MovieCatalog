import './App.css'
import { getMovieNowPlaying, searchMovie} from "./api"
import { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'

const NowPlaying = () => {
const [nowplayingMovies, setNowplayingMovies] = useState([])

  useEffect(() => {
    getMovieNowPlaying().then((result) => {
      setNowplayingMovies(result)
    })
  }, [])

  const search = async (q) => {
    if (q.length > 2) {
      const query = await searchMovie(q)
      setNowplayingMovies(query.results)
    }
  }

  const NowplayingMovieList = () => {
    return nowplayingMovies.map((movieNowplaying, i) => {
      return (
        <div className='Movie-wrapper' key={i}>
          <img className='Movie-image' src={`${process.env.REACT_APP_BASEIMGURL}/${movieNowplaying.poster_path}`} />
          <div className='Movie-title'>{movieNowplaying.title}</div>
          <div className='Movie-date'>{movieNowplaying.release_date}</div>
          <div className='Movie-rate'>Rating : {movieNowplaying.vote_average}</div>
        </div>
      )
    })
  }
  
  return (
    <div className="App">
      <header className="App-header">
      <div className='headerSearch'>
        <h1>Now Playing</h1>
        <input 
          placeholder='cari film kamu...'
          className='Movie-search'
          onChange={({target}) => search(target.value)}
        />
        </div>
        <div className='Movie-container'>
          <NowplayingMovieList />
        </div>
      </header>
    </div>
  );
}

export default NowPlaying;
