import './Resources/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './Components/Navigation';
import AboutPage from './Components/AboutPage';
import CantFindPage from './Components/CantFindPage';

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
        </Switch>

      </Router>


    </div>
  );
}

export default App;
