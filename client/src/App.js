import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage.js";
import CreateBook from "./components/CreateBook.js";
import MyLibrary from "./components/MyLibrary.js";
import SingleBook from "./components/SingleBook";
import "./App.css";
import CreateGenre from "./components/CreateGenre";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <nav>
            <div className="logo">
              <img
                src="/booklogo.png"
                alt="Logo"
                width="125px"
                height="125px"
              />
            </div>
            <div className="links">
              <Link to="/home">
                <div className="link-item">Home</div>
              </Link>
              <Link to="/library">
                <div className="link-item">My library</div>
              </Link>
              <Link to="/create">
                <div className="link-item"> Create Book</div>
              </Link>
            </div>
          </nav>
        </div>
        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/library" component={MyLibrary} />
          <Route exact path="/create" component={CreateBook} />
          <Route path="/create/genre" component={CreateGenre} />
          <Route path="/:bookId" component={SingleBook} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
