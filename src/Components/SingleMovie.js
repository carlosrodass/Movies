import React, { useState, useEffect } from 'react';
import { getMovieDetail } from './../api';
import ReactStars from 'react-stars';
import { useParams } from 'react-router-dom';

const SingleMovie = () => {
    const [detail, setDetail] = useState([]);
    let { id } = useParams();
    console.log(id);


    const fetchAPI = async () => {
        const response = await getMovieDetail(id);
        setDetail(response);
        console.log(detail);
    }

    useEffect(() => {
        fetchAPI();
    }, [])

    return (
        <section className="single-movie">
            <div className="wrapper-detail">
                <div className="image-container">
                    <img src={`https://image.tmdb.org/t/p/w500/${detail.poster_path}`} />
                </div>
                <div className="text-container">
                    <h1>{detail.title}</h1>
                    <p>{detail.overview}</p>
                    {/* <h5>Duration: {detail.runtime} Min</h5> */}
                    <h5>Movie Rating:</h5>
                    <ReactStars count={detail.item_count} size={30} color1={'#f4c10f'} />
                    <h5>Genres:</h5>
                    {detail.genres &&

                        detail.genres.map((genere) => {
                            const { id, name } = genere;
                            return (
                                <div className="genres" key={id}>
                                    <p>{name}</p>
                                </div>
                            )
                        })
                    }
                    {/* <h5>Release Date : {detail.release_date}</h5> */}
                </div>
            </div>
        </section>
    )
}

export default SingleMovie
