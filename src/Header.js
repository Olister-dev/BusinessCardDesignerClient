import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './Home';
import Design from './Design';
import Editor from './Editor';
import Preview from './Preview';
import About from './About';

const Header = () => {
    return (<header className="header">
        <div className="container">
            <div className="header__inner">
                <div className="header__logo">
                    <a href="#"><span>JE</span>TRO</a>
                </div>
                <Router>
                    <naw className="header__menu">

                        <ul>
                            <li><a><Link to="/">Home</Link></a></li>
                            <li><a><Link to="/Design">Design</Link></a></li>
                            <li><a><Link to="/Editor">Editor</Link></a></li>
                            <li><a><Link to="/Preview">Preview</Link></a></li>
                            <li><a><Link to="/About">About</Link></a></li>
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
            </div>
        </div>
    </header>);
}

export default Header;