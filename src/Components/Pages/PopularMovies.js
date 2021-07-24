import React, { useState, useEffect, useReducer } from 'react'
import { gettingLastMovies, getPeople } from './../../api';
import List from '../List';
import People from '../People';

const PopularMovies = () => {
    const [movie, setMovie] = useState([]);
    const [isMovie, setIsMovie] = useState(true);

    const getMoviePopular = async () => {
        const response = await gettingLastMovies();
        setMovie(response.results);
    }

    const gettingPeople = async () =>{
        const response = await getPeople();
        // setMovie(response.results);
        console.log(response);
    }

    useEffect(() => {
        getMoviePopular()
        gettingPeople()
    }, [])


    return (
        <>
            <section className="intro">
                {/* <People/> */}
                <div className="introduction">
                    <h5>Popular Movies this week, take a look and click whatever your favourite!  </h5>
                </div>
                <div className="list">
                    {
                        movie && movie.map((item) => {
                            const { id, poster_path, original_title, release_date, item_count } = item;
                            return (
                                <List
                                    movieId={id}
                                    poster_path={poster_path}
                                    original_title={original_title}
                                    release_date={release_date}
                                    item_count={item_count}
                                    isMovie={isMovie}
                                />
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default PopularMovies
