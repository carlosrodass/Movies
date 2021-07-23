import React, { useState, useEffect } from 'react';
import { getSerieDetail } from './../api';
import ReactStars from 'react-stars';
import { useParams } from 'react-router-dom';

const SingleSerie = () => {
    const [detail, setDetail] = useState([]);
    let { id } = useParams();
    console.log(id);


    const fetchAPI = async () => {
        const response = await getSerieDetail(id);
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
                    <h1 style={{ fontSize: '3vw', fontWeight: 'bolder', marginTop: '20px', marginBottom: '20px', textTransform: 'uppercase' }}>{detail.name}</h1>
                    <p style={{ color: 'gray' }}>{detail.overview}</p>
                    {/* <h5>Duration: {detail.runtime} Min</h5> */}
                    <h5>Movie Rating:</h5>
                    <ReactStars count={detail.item_count} size={30} color1={'#f4c10f'} />
                    <h5>Genres:</h5>
                    {detail.genres &&

                        detail.genres.map((genere) => {
                            const { id, name } = genere;
                            return (
                                <div className="genres" key={id}>
                                    <p style={{ fontSize: '12px' }}>{name}</p>
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

export default SingleSerie
