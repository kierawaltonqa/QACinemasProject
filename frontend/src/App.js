import './Resources/App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Screenpage from './Components/Screens/Screenpage';

import FilmClass from './Components/FilmClass';
import './Resources/Sidebar.css';

import Listings from './Components/Movies/MovieListings/Listings';
import NR from './Components/Movies/NewReleases/NR';
import DiscussionBoard from './Components/Discussion/DiscussionBoard';
import AboutPage from './Components/About/AboutPage';
import CantFindPage from './Components/CantFindPage';
import TicketBooking from './Components/TicketBooking/MainPage/TicketBooking';

import ContactUsPage from './Components/ContactUs/ContactUsPage';

import Home from './Components/HomePage/Home';
import SearchPage from './Components/Search/SearchPage';
import Footer from './Components/FooterFolder/Footer';



function App() {
  return (
    <div className="page-container">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <Home />

          </Route>

          <Route path="/FilmClass">
            <FilmClass />
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

          <Route path="/about">
            <AboutPage />
          </Route>

          <Route path="/screens">
            <Screenpage />
          </Route>

          <Route path="/contact">
            <ContactUsPage />
          </Route>

          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/bookings">
            <TicketBooking />
          </Route>
          <CantFindPage />

        </Switch>

      </Router>

      <Footer />



    </div >
  );
}

export default App;
