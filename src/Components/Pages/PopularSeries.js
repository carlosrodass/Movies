import React, { useState, useEffect, useReducer } from 'react'
import { Card } from 'react-bootstrap'
import { getPopularTvSeries } from './../../api';
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars';
import List from '../List';

const PopularSeries = () => {

    const [serie, setSerie] = useState([]);
    const [isSerie, setIsSerie] = useState(true);

    const getSeriePopular = async () => {
        const response = await getPopularTvSeries();
        setSerie(response.results);
    }

    useEffect(() => {
        getSeriePopular()
    }, [])


    return (
        <>
            <section className="intro">
            <div className="introduction">
                    <h5>Popular TV series this week, take a look and click whatever you want! </h5>
                </div>
                <div className="list">
                    {
                        serie && serie.map((item) => {
                            const { id, poster_path, name, first_air_date, item_count } = item;
                            return (
                                <List
                                    tvId={id}
                                    poster_path={poster_path}
                                    name={name}
                                    first_air_date={first_air_date}
                                    item_count={item_count}
                                    isSerie={isSerie}
                                />
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default PopularSeries
