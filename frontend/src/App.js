import './Resources/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Screenpage from './Components/Screens/Screenpage';

function App() {
  return (
    <div className="page-container">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact>

          </Route>
          <Route path="/screens">
            <Screenpage />
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
