import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import TripList from './components/TripList';
import ThemeList from './components/ThemeList';

const App = () => {
  return(
    <div>
      <Route Path="/" component={Home} exact={true} />
      <Route path="/locations" component={TripList} />
      <Route path="/themes" component={ThemeList} />
    </div>
  ) 
};

export default App;