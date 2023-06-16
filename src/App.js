import './App.css'
import NowPlaying from './NowPlaying'
import Popular from './Popular'
import Upcoming from './Upcoming';
import TopRated from './TopRated';
import NavigationBar from './NavigationBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <Router>
      <NavigationBar/>
      <Routes>
       <Route path="/" element={<Popular />} />
       <Route path="/nowplaying" element={<NowPlaying />} />
       <Route path="/upcoming" element={<Upcoming />} />
       <Route path="/toprated" element={<TopRated />} />
      </Routes>
    </Router>
  );

}

export default App;
