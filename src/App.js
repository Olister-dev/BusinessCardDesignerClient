import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Design from './components/Design';
import Editor from './components/Editor';
import Preview from './components/Preview';
import About from './components/About';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">

      <Header />

      <Router>
        <naw className="header__menu">

          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Design">Design</Link></li>
            <li><Link to="/Editor">Editor</Link></li>
            <li><Link to="/Preview">Preview</Link></li>
            <li><Link to="/About">About</Link></li>
            
          </ul>
        </naw>
        <Switch>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Preview">
            <Preview />
          </Route>
          <Route path="/Editor">
            <Editor />
          </Route>
          <Route path="/Design">
            <Design />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>

      <Footer />

    </div>
  );
}


export default App;
