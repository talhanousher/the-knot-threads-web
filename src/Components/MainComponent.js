import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Header from './HeaderComponent';

class Main extends Component {
    render() {
        const HomePage = () => {
            return (
                <Home />
            );
        }
        return (
            <div>
                <Header></Header>
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/contactus' component={Contact} />} />
                    <Route exact path='/aboutus' component={About} />} />
                    <Redirect to='/home' />
                </Switch>
            </div>
        )
    }
}

export default Main;