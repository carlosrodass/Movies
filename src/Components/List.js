import React, { useState, useEffect, useReducer } from 'react'
import { Card } from 'react-bootstrap'
import { getList } from './../api';
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars';

const List = () => {

    const [movie, setMovie] = useState([]);

    const getMovies = async () => {
        const response = await getList();
        setMovie(response.results);
        // console.log('response', response.items);
    }

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <section className="list">
            {
                movie && movie.map((item) => {
                    const { id, poster_path, title, release_date, item_count } = item;
                    return (    
                        <Card className="card" key={id}>
                            <Link to={`movie/${id}`}>
                                <Card.Img className="card-image" variant="top" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
                            </Link>
                            <Card.Body>
                                <Card.Title className="card-title" style={{ fontWeight: "bolder", fontSize: '2.5vh' }}>
                                    {title}
                                </Card.Title>
                                <Card.Text className="card-text">
                                    <p style={{ fontSize: '1.9vh',fontWeight: 'bolder' , color: 'gray'}}>
                                        Release Date: {release_date}
                                    </p>

                                    <ReactStars count={item_count} size={20} color1={'#f4c10f'} />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )
                })
            }

        </section>
    )
}

export default List
