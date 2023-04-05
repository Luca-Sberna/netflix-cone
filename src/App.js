import { React } from 'react';
import './App.scss';
import FirstGallery from './components/FirstGallery';
import MyFooter from './components/MyFooter';
import MyMain from './components/MyMain';
import MyNav from './components/MyNav';
import SecondGallery from './components/SecondGallery';
import ThirdGallery from './components/ThirdGallery';
import Settings from './components/Settings';
import Profile from './components/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TvShows from './components/TvShows';
import NotFound from './components/NotFound';
import MovieDetails from './components/MovieDetails';

//cliccare la lente input search sulla navbar

function App() {
  return (
    <div className="App px-3">
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path='/' element={<TvShows />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/movie-details/:imdbID/' element={<MovieDetails />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
