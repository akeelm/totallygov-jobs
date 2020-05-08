import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import './App.css';

function App() {

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Job listings</Link>
            </li>
            <li>
              <Link to="/job/:id">Job listing</Link>
            </li>
            <li>
              <Link to="/create">Create job listing</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/job/:id">
            <JobListing />
          </Route>
          <Route path="/create">
            <CreateListing />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Job Listings</h2>;
}

function JobListing() {
  const { id } = useParams();
  return <h2>{id}</h2>
}

function CreateListing() {
  return <h2>Create Listing</h2>
}

export default App;
