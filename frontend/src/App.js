import './Resources/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './Components/Navigation';

import AboutPage from './Components/AboutPage';
import CantFindPage from './Components/CantFindPage';

import Listings from './Components/Movies/MovieListings/Listings';
import NR from './Components/Movies/NewReleases/NR';


function App() {
  return (
    <div className="page-container">



      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact>
            
          </Route>
          <Route path="/About" exact>
            <AboutPage></AboutPage>
            </Route>
            <CantFindPage></CantFindPage>

          <Route path="/listings">
            <Listings />
          </Route>
          <Route path="/newreleases">
            <NR />
          </Route>

        </Switch>

      </Router>


    </div>
  );
}

export default App;
