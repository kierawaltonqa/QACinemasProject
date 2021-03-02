import './Resources/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Listings from './Components/Movies/MovieListings/Listings';
import NR from './Components/Movies/NewReleases/NR';
import DiscussionBoard from './Components/Discussion/DiscussionBoard';

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
          <Route path="/discussion">
            <DiscussionBoard />
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
