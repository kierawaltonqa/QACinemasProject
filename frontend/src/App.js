import './Resources/App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Listings from './Components/Movies/MovieListings/Listings';
import NR from './Components/Movies/NewReleases/NR';
import AboutPage from './Components/About/AboutPage';
import CantFindPage from './Components/CantFindPage';


function App() {
  return (
    <div className="page-container">
      <Router>  
        <Navigation />
        <Switch>
          <Route path="/" exact>

          </Route>
          <Route path="/listings">
            <Listings />
          </Route>
          <Route path="/newreleases">
            <NR />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
        </Switch>
        <CantFindPage />
      </Router>


    </div>
  );
}

export default App;
