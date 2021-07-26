import React, { useState, useEffect, useReducer } from 'react'
import List from '../List'
import Slider from '../Slider'
import GenreChip from '../GenreChip';
import { getList, getMovieGenres } from './../../api';
import NotFound from '../NotFound';

const Trending = () => {

    const [trending, setTrending] = useState([]);
    const [isTrending, setIsTrending] = useState(true)
    const [genreID, setGenreID] = useState();

    const getTrending = async () => {
        const response = await getList();
        setTrending(response.results);
    }

    const clickado = async () => {
      
            console.log(genreID);
            let gg = trending.filter((t) =>  t.genre_ids[0] === genreID)
            console.log("gg", gg);
            setTrending(gg);
    }

    useEffect(() => {
        getTrending()
    }, [genreID])

    return (
        <>
            <section className="intro">
            <div className="introduction">
                  <h1>Welcome! Check out Upcomming movies and Series! </h1>
                </div>
                <Slider />
                <div className="introduction">
                    <h5>Click and filter by Genre!</h5>
                </div>
                <GenreChip
                    clickado={() => clickado()}
                    setGenreID={setGenreID}
                    setTrending={setTrending}
                />
                <div className="introduction">
                    <h5>Popular Movies and Tv shows this week </h5>
                </div>
                <div className="list">
                    {
                        trending.length ?(trending.map((item) => {
                            const { id, poster_path, title, release_date, item_count } = item;
                            return (
                                <List
                                    id={id}
                                    poster_path={poster_path}
                                    title={title}
                                    release_date={release_date}
                                    item_count={item_count}
                                    isTrending={isTrending}
                                />
                            )
                        })) : (
                            <NotFound/>
                            // <h1>No movies with that genre</h1>
                        )
                    }
                </div>
            </section>

        </>
    )
}

export default Trending
