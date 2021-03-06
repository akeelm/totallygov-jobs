import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Listings from './components/listings/Listings';
import Listing from './components/listing/Listing';
import CreateListing from './components/create-listing/CreateListing';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="page-container">
        <div className="header">
          <div className="header__contents">
            <Link to="/" className="header__title">
              <span className="header__title__text">TotallyGov jobs</span>
              <span className="header__title__sub">
                Don't call us, we'll call you.
              </span>
            </Link>
            <Link to="/create" className="header__add-buton">
              <div className="button">+ Add job</div>
            </Link>
          </div>
        </div>

        <div className="page-content">
          <Switch>
            <Route path="/job/:id">
              <Listing />
            </Route>
            <Route path="/create">
              <CreateListing />
            </Route>
            <Route path="/">
              <Listings />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
