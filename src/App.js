import React from 'react';
//import { Route } from 'react-router-dom';
import Home from './pages/Home';
import TripList from './components/TripList';
import ThemeList from './components/ThemeList';

const App = () => {
  return(
    <div>
      <Home/>
      <TripList/>
      <ThemeList/>
    </div>
  ) 
};

export default App;