import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Intro from './Intro';
import Search from './Search';
import SingleMovie from './SingleMovie';
import Nabvar from './Nabvar';

const Index = () => {
    return (
        <Router>
            <Nabvar />
            <Switch>
                <Route exact path='/'>
                    <Intro />
                </Route>
                <Route path='/movie/:id'>
                    <SingleMovie />
                </Route>
                <Route path='/search'>
                    <Search />
                </Route>
            </Switch>
        </Router>
    );
};

export default Index;