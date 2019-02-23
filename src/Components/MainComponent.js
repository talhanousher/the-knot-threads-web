import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { DATA } from '../Shared/data';

import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends Component {
    render() {
        const HomePage = () => {
            return (
                <Home
                    shirt={DATA.shirts[0]}
                    cloth={DATA.cloths[0]}
                    leader={DATA.leaders[0]}
                />
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
                <Footer></Footer>
            </div>
        )
    }
}

export default Main;