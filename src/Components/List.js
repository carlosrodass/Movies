import React, { useState, useEffect, useReducer } from 'react'
import { Card } from 'react-bootstrap'
import { getList } from './../api';
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars';

const List = ({
    id,
    tvId,
    movieId,
    poster_path,
    title,
    name,
    original_title,
    first_air_date,
    release_date,
    item_count,
    isTrending,
    isSerie,
    isMovie
}) => {

    if (isTrending) {
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
                        <p style={{ fontSize: '1.9vh', fontWeight: 'bolder', color: 'gray' }}>
                            Release Date: {release_date}
                        </p>

                        <ReactStars count={item_count} size={20} color1={'#f4c10f'} />
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
    if (isSerie) {
        return (
            <Card className="card" key={tvId}>
                <Link to={`serie/${tvId}`}>
                    <Card.Img className="card-image" variant="top" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
                </Link>
                <Card.Body>
                    <Card.Title className="card-title" style={{ fontWeight: "bolder", fontSize: '2.5vh' }}>
                        {name}
                    </Card.Title>
                    <Card.Text className="card-text">
                        <p style={{ fontSize: '1.9vh', fontWeight: 'bolder', color: 'gray' }}>
                            Release Date: {first_air_date}
                        </p>

                        <ReactStars count={item_count} size={20} color1={'#f4c10f'} />
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
    if (isMovie) {
        return (
            <Card className="card" key={movieId}>
                <Link to={`movie/${movieId}`}>
                    <Card.Img className="card-image" variant="top" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
                </Link>
                <Card.Body>
                    <Card.Title className="card-title" style={{ fontWeight: "bolder", fontSize: '2.5vh' }}>
                        {original_title}
                    </Card.Title>
                    <Card.Text className="card-text">
                        <p style={{ fontSize: '1.9vh', fontWeight: 'bolder', color: 'gray' }}>
                            Release Date: {release_date}
                        </p>

                        <ReactStars count={item_count} size={20} color1={'#f4c10f'} />
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }

}

export default List
