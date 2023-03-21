import React, { Component, useState } from "react";
import '../styles/App.css';
import Home from "./Home";
import About from "./About";
import NoMatch from "./NoMatch";
import LocationDisplay from "./LocationDisplay";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";

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
                        <Route exact path={'*'} component={NoMatch} />

                    </Switch>

                </div>
            </BrowserRouter>


        )
    }
}


export default App;
