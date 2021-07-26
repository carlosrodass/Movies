import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Pages
import Trending from './Pages/Trending';
import PopularSeries from './Pages/PopularSeries';
import PopularMovies from './Pages/PopularMovies';
import Search from './Pages/Search';

import SingleMovie from './SingleMovie';
import SingleSerie from './SingleSerie';
import Nabvar from './Nabvar';
import Footer from './Footer';

const Index = () => {
    return (
        <Router>
            <Nabvar />
            <Switch>
                <Route exact path='/'>
                    <Trending />
                </Route>
                <Route exact path='/PopularMovies'>
                    <PopularMovies />
                </Route>
                <Route exact path='/PopularSeries'>
                    <PopularSeries />
                </Route>
                <Route path='/Search'>
                    <Search />
                </Route>
                <Route path='/movie/:id'>
                    <SingleMovie />
                </Route>
                <Route path='/serie/:id'>
                    <SingleSerie />
                </Route>
            </Switch>
            {/* <Footer /> */}
        </Router>
    );
};

export default Index;