import './Resources/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './Components/Navigation';
import FilmClass from './Components/FilmClass';
import './Resources/Sidebar.css';

function App() {
  return (
    <div className="page-container">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact>

          </Route>
          <Route path="/FilmClass">
            <FilmClass />
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
