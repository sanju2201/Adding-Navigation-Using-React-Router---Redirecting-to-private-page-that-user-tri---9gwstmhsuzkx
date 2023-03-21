import React, { Component, useState } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import NoMatch from "./NoMatch";
import '../styles/App.css';
import LocationDisplay from "./LocationDisplay";

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div id="main">
                    <LocationDisplay />
                    <Link to={'/'}>Home</Link>
                    <Link to={'/about'}>About</Link>

                    <Switch>
                        <Route exact path={'/'} component={Home} />
                        <Route exact path={'/about'} component={About} />
                        <Route exact path={'/*'} component={NoMatch} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}


export default App;
